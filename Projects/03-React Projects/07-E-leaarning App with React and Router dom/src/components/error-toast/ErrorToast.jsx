import React from 'react';
import style from './ErrorToast.module.css';

function ErrorToast({ error }) {
  return <div className={style.box}>{error}</div>;
}

export default ErrorToast;
