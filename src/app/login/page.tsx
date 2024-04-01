import LoginPage from "../components/LoginPage/LoginPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login",
  description: "To-Do Login Page",
};

export default function Login() {
  return (
    <>
      <LoginPage />
    </>
  );
}
