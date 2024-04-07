import "./Profile.scss";
import Link from "next/link";
import Image from "next/image";
import { ProfileProps } from "./profile.interface";
import Close from "../../img/exit.svg";
import Edit from "../../img/edit.svg";

export default function Profile({
  setBurgerClicked,
  burgerClicked,
}: ProfileProps) {
  function clickBurger(): void {
    if (burgerClicked) {
      document
        .querySelector(".profile__container")
        ?.classList.add("profile__container_inactive");
      setTimeout(() => {
        setBurgerClicked();
      }, 200);
    }
  }

  return (
    <section className="profile">
      <div
        className={`profile__container ${burgerClicked ? "profile__container_active" : ""}`}
      >
        <h2 className="profile__title">Привет, Марина</h2>
        <button className="profile__button-close" onClick={clickBurger}>
          <Image
            className="profile__close-img"
            src={Close}
            alt="кнопка-закрыть"
          />
        </button>
        <form
          className="profile__form"
          name="profile-form"
          action="#"
          id="profile-form"
        >
          <fieldset className="profile__fieldset">
            <div className="profile__container-input">
              <label className="profile__label" htmlFor="name">
                <input
                  className="profile__input"
                  type="text"
                  id="name"
                  placeholder="Марина"
                  minLength={2}
                  maxLength={30}
                  required
                />
              </label>
              <label className="profile__label" htmlFor="email">
                <input
                  className="profile__input"
                  type="email"
                  id="email"
                  placeholder="E-mail"
                  minLength={2}
                  maxLength={30}
                  required
                />
              </label>
            </div>
            <button className="profile__button-edit" type="submit">
              <Image
                className="profile__edit-img"
                src={Edit}
                alt="редактировать"
              />
            </button>
          </fieldset>
          <button className="profile__button-exit" type="button">
            <Link className="profile__link" href="#">
              Выйти
            </Link>
          </button>
        </form>
      </div>
    </section>
  );
}
