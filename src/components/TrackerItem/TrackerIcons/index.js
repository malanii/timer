import React from "react";
import s from "./style.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPause } from "@fortawesome/free-solid-svg-icons";

export default function TrackerIcons() {
  return (
    <div className={s.wrapper}>
        <div className={s.iconWrapper}>
            <FontAwesomeIcon className={s.icon} icon={faPlay} />
        </div>
      <div className={s.iconWrapper}>
        <FontAwesomeIcon className={s.icon} icon={faPause} />
      </div>
    </div>
  );
}
