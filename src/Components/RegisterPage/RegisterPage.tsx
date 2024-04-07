"use client";
import React, { ChangeEvent, useState, useEffect } from "react";
import "./RegisterPage.scss";
import FormRegister from "../FormRegister/FormRegister";
import { Value, ValidFields, Focus, User } from "@/utils/interface";
import { validation } from "../../utils/validation";
import InputRegister from "../InputRegister/InputRegister";

export default function Register() {
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
        title="Регистрация"
        name="form-register"
        buttonText="Зарегистрироваться"
        text="Уже зарегистрированы?"
        link="Войти"
        href="/login"
      >
        <fieldset className="register__fieldset">
          <InputRegister
            name="name"
            type="text"
            value={values}
            handleChange={handleChange}
            handleFocus={handleFocus}
            handleBlur={handleBlur}
            error={error}
            validFields={validFields}
            placeholder="Имя"
          />
          <InputRegister
            name="email"
            type="text"
            value={values}
            handleChange={handleChange}
            handleFocus={handleFocus}
            handleBlur={handleBlur}
            error={error}
            validFields={validFields}
            placeholder="E-mail"
          />
          <InputRegister
            name="password"
            type="password"
            value={values}
            handleChange={handleChange}
            handleFocus={handleFocus}
            handleBlur={handleBlur}
            error={error}
            validFields={validFields}
            placeholder="Пароль"
          />
        </fieldset>
      </FormRegister>
    </main>
  );
}
