import "./FormRegister.scss";
import Link from "next/link";
import { FormRegisterProps } from "@/app/utils/types";

export default function FormRegister({
  children,
  title,
  name,
  buttonText,
  text,
  link,
  href,
  isValid,
}: FormRegisterProps) {
  return (
    <section className="form-register">
      <h1 className="form-register__title">{title}</h1>
      <form
        className="form-register__form"
        action="#"
        name={name}
        id={name}
        noValidate
      >
        {children}
        <button
          className={`form-register__button ${!isValid && "form-register__button_disabled"}`}
          type="submit"
          disabled={true}
        >
          {buttonText}
        </button>
      </form>
      <div className="form-register__container">
        <p className="form-register__text">{text}</p>
        <Link className="form-register__link" href={href}>
          {link}
        </Link>
      </div>
    </section>
  );
}
