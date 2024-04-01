import Register from "../components/Register/Register";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Registration",
  description: "To-Do Registration Page",
};

export default function Registration() {
  return (
    <>
      <Register />
    </>
  );
}
