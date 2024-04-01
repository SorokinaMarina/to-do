import "../Register/Register.scss";
import FormRegister from "../FormRegister/FormRegister";

export default function LoginPage() {
  return (
    <main className="register">
      <FormRegister
        // formValidity={formValidity}
        title="Авторизация"
        name="form-login"
        buttonText="Войти"
        text="Ещё не зарегистрированы?"
        link="Регистрация"
        href="/register"
      >
        <fieldset className="register__fieldset">
          <label className="register__label" htmlFor="email">
            <input
              className={`register__input ${!true && "register__input_error"}`}
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
              className={`register__input ${!true && "register__input_error"}`}
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
