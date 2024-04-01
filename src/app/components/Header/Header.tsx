"use client";
import React, { useState } from "react";
import "./Header.scss";
import Input from "../Input/Input";
import Title from "../Title/Title";
import BurgerButton from "../BurgerButton/BurgerButton";
import Profile from "../Profile/Profile";

export default function Header() {
  const [burgerClicked, setBurgerClicked] = useState<boolean>(false);

  //Функция, которая отвечает за открытие/закрытие попапа с профилем
  function clickBurger(): void {
    setBurgerClicked(true);
  }

  return (
    <section className="header">
      <div className="header__container">
        <Input />
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
