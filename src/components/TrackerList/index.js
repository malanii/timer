import React from "react";
import s from "./style.module.css";
import TrackerItem from "../TrackerItem";

export default function TrackerList() {
  return (
    <div className={s.wrapper}>
      <TrackerItem />
      <TrackerItem />
      <TrackerItem />
    </div>
  );
}
