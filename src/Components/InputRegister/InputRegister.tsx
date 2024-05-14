import "./InputRegister.scss";
import { InputRegisterType } from "./inputRegister.interface";

export default function InputRegister({
  name,
  type,
  placeholder,
  register,
  options,
  error,
}: InputRegisterType) {
  return (
    <label className="input-register" htmlFor={name}>
      <input
        className={`input-register__input ${error && "input-register__input_error"}`}
        type={type}
        id={name}
        placeholder={placeholder}
        {...register(name, options)}
      />
      <span className="input-register__span">{error}</span>
    </label>
  );
}
