import "./InputRegister.scss";
import { InputRegisterType } from "./inputRegister.interface";

export default function InputRegister({
  name,
  type,
  value,
  handleChange,
  handleFocus,
  handleBlur,
  error,
  validFields,
  placeholder,
}: InputRegisterType) {
  return (
    <label className="input-register" htmlFor={name}>
      <input
        className={`input-register__input ${!validFields[name] && "input-register__input_error"}`}
        name={name}
        type={type}
        id={name}
        minLength={2}
        maxLength={30}
        required
        placeholder={placeholder}
        value={value[name]}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
      <span className="input-register__span">{error[name]}</span>
    </label>
  );
}
