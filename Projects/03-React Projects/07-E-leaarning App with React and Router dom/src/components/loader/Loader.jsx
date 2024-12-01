import React from 'react';
import style from './Loader.module.css';

export default function oader() {
  return (
    <div className={style.loader}>
      <img
        className={style.loadIcon}
        alt='loader-icon'
        src='https://cdn-icons-png.flaticon.com/512/4228/4228133.png'
      />
    </div>
  );
}
