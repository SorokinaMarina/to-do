"use client";
import "./RegisterPage.scss";
import FormRegister from "../FormRegister/FormRegister";
import InputRegister from "../InputRegister/InputRegister";
import { useForm, SubmitHandler } from "react-hook-form";
import { IInputType } from "@/utils/interface";
import {
  optionsInputName,
  optionsInputEmail,
  optionsInputPassword,
} from "@/utils/constants";
import { registerUser } from "@/utils/api";
import { useRouter } from "next/navigation";

export default function Register() {
  // Используем useRouter для перехода на другую страницу
  const router = useRouter();
  // Используем React Hook Form
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<IInputType>({
    mode: "onChange",
  });

  // Функция срабатывает при клике на кнопку формы регистрации
  const onSubmit: SubmitHandler<IInputType> = (data) => {
    try {
      registerUser(data).then((res) => {
        if (res.id) {
          reset();
          router.push("/login");
        }
      });
    } catch (err) {
      console.log(err);
      return err;
    }
  };

  return (
    <main className="register">
      <FormRegister
        title="Регистрация"
        name="form-register"
        buttonText="Зарегистрироваться"
        text="Уже зарегистрированы?"
        link="Войти"
        href="/login"
        onSubmit={handleSubmit(onSubmit)}
      >
        <fieldset className="register__fieldset">
          <InputRegister
            name="name"
            type="text"
            placeholder="Имя"
            register={register}
            options={optionsInputName}
            error={errors.name?.message}
          />
          <InputRegister
            name="email"
            type="text"
            placeholder="E-mail"
            register={register}
            options={optionsInputEmail}
            error={errors.email?.message}
          />
          <InputRegister
            name="password"
            type="password"
            placeholder="Пароль"
            register={register}
            options={optionsInputPassword}
            error={errors.password?.message}
          />
        </fieldset>
      </FormRegister>
    </main>
  );
}
