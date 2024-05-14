// import { ChangeEvent } from "react";
// import { Value, ValidFields } from "@/utils/interface";
import { UseFormRegister } from "react-hook-form";
import { IInputType, IOptions } from "@/utils/interface";

export interface InputRegisterType {
  name: string;
  type: string;
  // value: Value;
  // handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  // handleFocus: (e: React.FocusEvent<HTMLInputElement>) => void;
  // handleBlur: () => void;
  // error: Value;
  // validFields: ValidFields;
  placeholder: string;
  register: UseFormRegister<IInputType>;
  options: IOptions;
  error: string | undefined;
}
