import { ChangeEvent } from "react";

export interface BurgerProps {
  clickBurger: () => void;
}

export interface ProfileProps {
  setBurgerClicked: () => void;
  burgerClicked: boolean;
}

export interface FormRegisterProps {
  title: string;
  name: string;
  buttonText: string;
  text: string;
  link: string;
  href: string;
  children: JSX.Element;
  isValid: boolean;
}

export interface Value {
  [key: string]: string | "";
}

export interface ValidFields {
  [key: string]: boolean;
}

export interface Focus {
  focus: boolean;
  name: string | "";
}

export interface Validation {
  values: Value;
  setValidFields: React.Dispatch<React.SetStateAction<ValidFields>>;
  setError: React.Dispatch<React.SetStateAction<Value>>;
  isFocused: Focus;
}

export interface ValidateField {
  isValid: boolean;
  setValidFields: React.Dispatch<React.SetStateAction<ValidFields>>;
  setError: React.Dispatch<React.SetStateAction<Value>>;
  isFocused: Focus;
  errorText: string;
}

export interface InputRegisterType {
  name: string;
  type: string;
  value: Value;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleFocus: (e: React.FocusEvent<HTMLInputElement>) => void;
  handleBlur: () => void;
  error: Value;
  validFields: ValidFields;
  placeholder: string;
}
