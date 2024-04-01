import { Validation, ValidateField } from "./types";

const regExpEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const regExpPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]+$/;
const regExpName = /^[a-zA-Zа-яА-Я\s-]+$/;

export function validation({
  values,
  setValidFields,
  setError,
  isFocused,
}: Validation) {
  const nameValid =
    values.name.length >= 2 &&
    values.name.length <= 30 &&
    regExpName.test(values.name);
  const emailValid = regExpEmail.test(values.email);
  const passwordValid =
    regExpPassword.test(values.password) && values.password.length > 6;

  if (isFocused.name === "name") {
    validateField({
      isValid: nameValid,
      isFocused,
      setError,
      setValidFields,
      errorText:
        "Имя должно содержать не менее 2 и не более 30 символов латинского или русского алфавита, пробел, дефис",
    });
  }

  if (isFocused.name === "email") {
    validateField({
      isValid: emailValid,
      isFocused,
      setError,
      setValidFields,
      errorText: "Введён некорректный адрес электронной почты",
    });
  }

  if (isFocused.name === "password") {
    validateField({
      isValid: passwordValid,
      isFocused,
      setError,
      setValidFields,
      errorText:
        "Пароль должен содержать латинские символы верхнего и нижнего регистра и хотя бы одну цифру",
    });
  }
}

function validateField({
  isValid,
  isFocused,
  setError,
  setValidFields,
  errorText,
}: ValidateField) {
  if (isFocused.focus && !isValid) {
    setError((prevValues) => ({
      ...prevValues,
      [isFocused.name]: errorText,
    }));
    setValidFields((prevValues) => ({
      ...prevValues,
      [isFocused.name]: false,
    }));
  } else {
    setError((prevValues) => ({ ...prevValues, [isFocused.name]: "" }));
    setValidFields((prevValues) => ({ ...prevValues, [isFocused.name]: true }));
  }
}
