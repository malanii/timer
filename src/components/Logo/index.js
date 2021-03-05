import React from "react";
import s from "./style.module.css";
import { LogoText } from "../../constants/componentsData";

export default function Logo() {
  return <p className={s.text}>{LogoText}</p>;
}
