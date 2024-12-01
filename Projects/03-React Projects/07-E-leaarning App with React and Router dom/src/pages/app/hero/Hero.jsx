import React from "react";
import style from "./Hero.module.css";

function Hero() {
  return (
    <header>
      <section className={style.logo_wrapper}>
        <img
          className={style.logo}
          src="https://files.codingninjas.in/pl-ninja-16706.svg"
          alt="logo"
        />
      </section>
      <section className={style.content}>
        <h4>Are you ready to ?</h4>
        <h1>Be a Coder</h1>
        <p>
          See how experienced developers solve problems in real-time. Watching
          scripted tutorials is great, but understanding how developers think is
          invaluable.
        </p>
      </section>
    </header>
  );
}

export default Hero;
