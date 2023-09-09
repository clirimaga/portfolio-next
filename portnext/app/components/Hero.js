import React, { Suspense } from "react";
import MyCard from "./MyCard";
import About from "./About";
import { useTranslation } from "react-i18next";

export default function Hero() {
  return (
    <section className="row pt-5 justify-content-center">
      <MyCard />
      <About />
    </section>
  );
}
