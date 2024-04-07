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

export interface User {
  id: string;
  name: string;
  email: string;
  password: string;
}

export interface ITask {
  id: string;
  task: string;
  completed: boolean;
}

export interface IButtonTask {
  completedItem?: boolean;
  id: string;
  completed: boolean;
}
