import { Link } from "react-router-dom";

import styles from "./style.module.css";

export const CardItem = ({ image = null, linkTo, title, subtitle = null }) => {
  return (
    <Link to={linkTo}>
      <div className={styles.cardItem}>
        {image && <img src={image} alt="" className={styles.cardImage} />}

        <div className={styles.cardDescription}>
          <div className={styles.cardDescription__title}>{title}</div>
          {subtitle && (
            <div className={styles.cardDescription__subtitle}>{subtitle}</div>
          )}
        </div>
      </div>
    </Link>
  );
};
