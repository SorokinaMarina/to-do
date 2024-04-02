"use client";

import React, { useState, ChangeEvent, useEffect } from "react";
import "../Register/Register.scss";
import FormRegister from "../FormRegister/FormRegister";
import { Value, ValidFields, Focus } from "@/app/utils/types";
import { validation } from "@/app/utils/validation";
import InputRegister from "../InputRegister/InputRegister";

export default function LoginPage() {
  // Переменная собирает данные всех полей
  const [values, setValues] = useState<Value>({
    name: "",
    email: "",
    password: "",
  });
  // Переменная, которая хранит в себе булевое значение о валидности каждого поля
  const [validFields, setValidFields] = useState<ValidFields>({
    name: false,
    email: false,
    password: false,
  });
  // Переменная отвечает за активность кнопки регистрации
  const isValid = Object.keys(validFields).every(
    (item: keyof ValidFields) => validFields[item],
  );
  // Переменная, отвечающая за состояние фокуса инпута
  const [isFocused, setIsFocused] = useState<Focus>({
    focus: false,
    name: "",
  });
  // Переменная, которая записывает текст ошибки
  const [error, setError] = useState<Value>({
    name: "",
    email: "",
    password: "",
  });

  // Функция, которая записывает данные из полей в объект values
  function handleChange(e: ChangeEvent<HTMLInputElement>): void {
    const { name, value } = e.target;

    setValues((prevValues) => ({ ...prevValues, [name]: value }));
  }

  //Функции, отвечающие за состояние фокуса в инпуте
  function handleFocus(e: React.FocusEvent<HTMLInputElement>): void {
    const { name } = e.target;
    setIsFocused({ name: name, focus: true });
  }

  function handleBlur(): void {
    setIsFocused({ name: "", focus: false });
  }

  // Проверяем валидацию полей
  useEffect(() => {
    validation({ values, setValidFields, setError, isFocused });
  }, [values, isFocused]);

  return (
    <main className="register">
      <FormRegister
        isValid={isValid}
        title="Авторизация"
        name="form-login"
        buttonText="Войти"
        text="Ещё не зарегистрированы?"
        link="Регистрация"
        href="/register"
      >
        <fieldset className="register__fieldset">
          <InputRegister
            name="email"
            type="text"
            placeholder="E-mail"
            value={values}
            handleChange={handleChange}
            handleFocus={handleFocus}
            handleBlur={handleBlur}
            error={error}
            validFields={validFields}
          />
          <InputRegister
            name="password"
            type="password"
            placeholder="Пароль"
            value={values}
            handleChange={handleChange}
            handleFocus={handleFocus}
            handleBlur={handleBlur}
            error={error}
            validFields={validFields}
          />
        </fieldset>
      </FormRegister>
    </main>
  );
}
