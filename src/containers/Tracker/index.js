import React from "react";
import s from "./style.module.css";
import Input from "../../components/Input";
import TrackerList from "../../components/TrackerList";

export default function Tracker() {
  return (
    <div className={s.wrapper}>
      <Input />
      <TrackerList />
    </div>
  );
}
