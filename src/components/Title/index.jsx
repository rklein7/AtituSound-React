// PROP TYPES

import style from "./style.module.css";

export const Title = ({ title, subtitle = null }) => {
  return (
    <>
      <h2 className={style.title}>{title}</h2>
      {subtitle && <small className={style.subtitle}>{subtitle}</small>}
    </>
  );
};
