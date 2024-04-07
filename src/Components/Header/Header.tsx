"use client";
import React, { useState } from "react";
import "./Header.scss";
import Input from "../Input/Input";
import Title from "../Title/Title";
import BurgerButton from "../BurgerButton/BurgerButton";
import Profile from "../Profile/Profile";
import useSWRMutation from "swr/mutation";
import { addTask } from "@/utils/api";

export default function Header() {
  // Переменная отвечает за активность бургер-меню
  const [burgerClicked, setBurgerClicked] = useState<boolean>(false);
  // Переменная собирает данные с поля ввода
  const [values, setValues] = useState<string | "">("");

  // Используем useSWRMutation для добавления данных на сервер
  const { trigger } = useSWRMutation("tasks", () => addTask(values));

  //Функция, которая отвечает за открытие/закрытие попапа с профилем
  function clickBurger(): void {
    setBurgerClicked(true);
  }

  // Отправляем данные на сервер
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    trigger();
    setValues("");
  }

  return (
    <section className="header">
      <div className="header__container">
        <form
          className="header__form"
          action="#"
          id="form"
          name="form"
          onSubmit={handleSubmit}
        >
          <Input values={values} setValues={setValues} />
        </form>
        <Title />
        <BurgerButton clickBurger={clickBurger} />
        {burgerClicked && (
          <Profile
            setBurgerClicked={() => {
              setBurgerClicked(false);
            }}
            burgerClicked={burgerClicked}
          />
        )}
      </div>
    </section>
  );
}
