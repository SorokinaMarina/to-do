import "./Register.scss";
import FormRegister from "../FormRegister/FormRegister";

export default function Register() {
  return (
    <main className="register">
      <FormRegister
        // formValidity={formValidity}
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
              className={`register__input ${!true && "register__input_error"}`}
              type="text"
              id="name"
              minLength={2}
              maxLength={30}
              required
              placeholder="Имя"
              // value={name}
              // onChange={handleNameChange}
              // onFocus={handleFocus}
              // onBlur={handleBlur}
            />
            <span className="register__span">error</span>
          </label>
          <label className="register__label" htmlFor="email">
            <input
              className={`register__input ${!false && "register__input_error"}`}
              type="email"
              id="email"
              minLength={2}
              maxLength={30}
              required
              placeholder="E-mail"
              // value={email}
              // onChange={handleEmailChange}
              // onFocus={handleFocus}
              // onBlur={handleBlur}
            />
            <span className="register__span">error</span>
          </label>
          <label className="register__label" htmlFor="password">
            <input
              className={`register__input ${!false && "register__input_error"}`}
              type="password"
              id="password"
              minLength={2}
              maxLength={30}
              required
              placeholder="Пароль"
              // value={password}
              // onChange={handlePasswordChange}
              // onFocus={handleFocus}
              // onBlur={handleBlur}
            />
            <span className="register__span">error</span>
          </label>
        </fieldset>
      </FormRegister>
    </main>
  );
}
