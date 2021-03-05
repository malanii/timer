import React from "react";
import s from "./style.module.css";
import { InputText } from "../../constants/componentsData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";

export default function Input() {
  return (
    <div className={s.wrapper}>
      <input className={s.input} type="text" placeholder={InputText} />
      <div className={s.iconWrapper}>
        <FontAwesomeIcon className={s.icon} icon={faPlay} />
      </div>
    </div>
  );
}
