import { useState } from "react";
import { Outlet, Navigate, useNavigate } from "react-router-dom";
import { useAppContext } from "../../AppContextProvider";
import { Spacer } from "../Spacer";

import styles from "./style.module.css";

export const Layout = () => {
  const {
    data: { isLogged = false }
  } = useAppContext(); // desestruturacao de objeto

  return isLogged ? <RenderLayout /> : <Navigate to="/login" />;
};

function RenderLayout() {
  const navigate = useNavigate();
  const [menuStatus, setMenuStatus] = useState(false);

  const handleMenuStatus = (status = "close") =>
    setMenuStatus(status === "open" ? true : false);

  const handleMenuClick = (route) => {
    handleMenuStatus("close");
    navigate(route);
  };

  const handleLogout = () => {
    console.log("Fazer logout");
    navigate("/");
  };

  return (
    <div className="container">
      <nav className={styles.menuContainer}>
        <button onClick={() => handleMenuStatus("open")}>
          <img
            src="https://files.jaison.com.br/atitusound/menu.svg"
            alt="Imagem de menu"
          />
        </button>
      </nav>

      <nav
        className={styles.menuMobile}
        style={{ display: menuStatus ? "block" : "none" }}
      >
        <div className="container">
          <div className={styles.closeMenuContainer}>
            <button onClick={() => handleMenuStatus("close")}>
              <img
                src="https://files.jaison.com.br/atitusound/close.png"
                alt="Imagem de menu"
              />
            </button>
          </div>

          <ul>
            <li>
              <button
                className={styles.menuItem}
                onClick={() => handleMenuClick("playlists")}
              >
                Playlists
              </button>
            </li>
            <li>
              <Spacer size={2} />
            </li>
            <li style={{ maxWidth: 180 }}>
              <button className="btn btnSecondary" onClick={handleLogout}>
                Sair
              </button>
            </li>
          </ul>
        </div>
      </nav>

      <Outlet />
    </div>
  );
}
