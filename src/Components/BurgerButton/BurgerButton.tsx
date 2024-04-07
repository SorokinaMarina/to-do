import "./BurgerButton.scss";
import { BurgerProps } from "./burger.interface";
import Burger_img from "../../img/Burger.svg";
import Image from "next/image";

export default function BurgerButton({ clickBurger }: BurgerProps) {
  return (
    <section className="burger">
      <button onClick={clickBurger} className="burger__button">
        <Image className="burger__img" src={Burger_img} alt="burger" />
      </button>
    </section>
  );
}
