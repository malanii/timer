import React from "react";
import s from "./app.module.css";
import Logo from "./components/Logo";
import Tracker from "./containers/Tracker";

function App() {
  return (
    <div className={s.wrapper}>
      <Logo />
      <Tracker />
      <p>test1</p>
    </div>
  );
}

export default App;
