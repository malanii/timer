import React from "react";
import s from "./style.module.css";
import TrackerName from "./TrackerName";
import TrackerTime from "./TrackerTime";
import TrackerIcons from "./TrackerIcons";

export default function TrackerItem() {
  return (
    <div className={s.wrapper}>
      <TrackerName />
      <TrackerTime />
      <TrackerIcons />
    </div>
  );
}
