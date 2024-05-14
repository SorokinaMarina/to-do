import { UseFormHandleSubmit, SubmitHandler } from "react-hook-form";
import { IInputType } from "@/utils/interface";

export interface FormRegisterProps {
  title: string;
  name: string;
  buttonText: string;
  text: string;
  link: string;
  href: string;
  children: JSX.Element;
  onSubmit: React.FormEventHandler<HTMLFormElement>;
}
