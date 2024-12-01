import React from "react";
import style from "./style.module.css";

function Card({ title, img, id }) {
  return (
    <div style={{ cursor: "pointer" }} className={style.card_container}>
      <div className={style.card_image}>
        <div className={style.image_container}>
          <img src={img} alt="icons" />
        </div>
      </div>
      <div className={style.card_content}>
        <h1 className={style.card_title}>{title}</h1>
      </div>
    </div>
  );
}

export default Card;
