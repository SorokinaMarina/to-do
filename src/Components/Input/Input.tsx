import React, { ChangeEvent, useState } from "react";
import "./Input.scss";
import Enter from "../../img/Enter.svg";
import Image from "next/image";
import { IInput } from "./Input.interface";

export default function Input({ values, setValues }: IInput) {
  // Собираем данные из поля ввода
  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const { value } = e.target;
    setValues(value);
  }

  return (
    <section className="input">
      <label className="input__label" htmlFor="input">
        <input
          className="input__field"
          type="text"
          id="input"
          placeholder="Добавить задачу"
          name="input-field"
          value={values}
          onChange={handleChange}
        />
        <button className="input__button" type="submit">
          <Image className="input__img" src={Enter} alt="Enter" />
        </button>
      </label>
    </section>
  );
}
