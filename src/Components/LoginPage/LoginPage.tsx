"use client";

import React from "react";
import "../RegisterPage/RegisterPage.scss";
import FormRegister from "../FormRegister/FormRegister";
import InputRegister from "../InputRegister/InputRegister";
import { useForm, SubmitHandler } from "react-hook-form";
import { IInputType } from "@/utils/interface";
import { optionsInputName, optionsInputEmail } from "@/utils/constants";

export default function LoginPage() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<IInputType>({
    mode: "onChange",
  });

  const onSubmit: SubmitHandler<IInputType> = (data) => {
    console.log(data);
  };

  return (
    <main className="register">
      <FormRegister
        title="Авторизация"
        name="form-login"
        buttonText="Войти"
        text="Ещё не зарегистрированы?"
        link="Регистрация"
        href="/register"
        onSubmit={handleSubmit(onSubmit)}
      >
        <fieldset className="register__fieldset">
          <InputRegister
            name="email"
            type="text"
            register={register}
            options={optionsInputName}
            error={errors.name?.message}
            placeholder="E-mail"
          />
          <InputRegister
            name="password"
            type="password"
            register={register}
            options={optionsInputEmail}
            error={errors.email?.message}
            placeholder="Пароль"
          />
        </fieldset>
      </FormRegister>
    </main>
  );
}
