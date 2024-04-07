import React from "react";
import Main from "../Components/Main/Main";
import Header from "../Components/Header/Header";
import RootLayout from "./layout";

export default function Home() {
  return (
    <RootLayout>
      <Header />
      <Main />
    </RootLayout>
  );
}
