"use client";
import React, { ChangeEvent, useState, useEffect } from "react";
import "./Register.scss";
import FormRegister from "../FormRegister/FormRegister";
import { Value, ValidFields, Focus } from "@/app/utils/types";
import { validation } from "../../utils/validation";

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
  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;

    setValues((prevValues) => ({ ...prevValues, [name]: value }));
  }

  //Функции, отвечающие за состояние фокуса в инпуте
  function handleFocus(e: React.FocusEvent<HTMLInputElement>): void {
    const { name } = e.target;
    setIsFocused({ name: name, focus: true });
  }

  function handleBlur(e: React.FocusEvent<HTMLInputElement>): void {
    setIsFocused({ name: "", focus: false });
  }

  // Проверяем валидацию полей
  useEffect(() => {
    validation({ values, setValidFields, setError, isFocused });
  }, [values]);

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
          <label className="register__label" htmlFor="name">
            <input
              className={`register__input ${!validFields.name && "register__input_error"}`}
              name="name"
              type="text"
              id="name"
              minLength={2}
              maxLength={30}
              required
              placeholder="Имя"
              value={values.name}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
            <span className="register__span">{error.name}</span>
          </label>
          <label className="register__label" htmlFor="email">
            <input
              className={`register__input ${error.email !== "" && "register__input_error"}`}
              name="email"
              type="email"
              id="email"
              minLength={2}
              maxLength={30}
              required
              placeholder="E-mail"
              value={values.email}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
            <span className="register__span">{error.email}</span>
          </label>
          <label className="register__label" htmlFor="password">
            <input
              className={`register__input ${error.password !== "" && "register__input_error"}`}
              name="password"
              type="password"
              id="password"
              minLength={2}
              maxLength={30}
              required
              placeholder="Пароль"
              value={values.password}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
            <span className="register__span">{error.password}</span>
          </label>
        </fieldset>
      </FormRegister>
    </main>
  );
}
