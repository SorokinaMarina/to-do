import "./FormRegister.scss";
import Link from "next/link";
import { FormRegisterProps } from "./formRegister.interface";

export default function FormRegister({
  children,
  title,
  name,
  buttonText,
  text,
  link,
  href,
  onSubmit,
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
        onSubmit={onSubmit}
      >
        {children}
        <button className="form-register__button" type="submit">
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
