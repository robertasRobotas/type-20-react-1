import { useState } from "react";
import styles from "./Header.module.css";
import burgerBtn from "../../assets/burger.svg";

const Header = () => {
  const [logo, setLogo] = useState("My web page");
  const [isDisplayMobileMenu, setDisplayMobileMenu] = useState(false);

  const displayLog = () => {
    console.log(logo);
  };

  const onBurgerBtnClick = () => {
    setDisplayMobileMenu(!isDisplayMobileMenu);
  };

  return (
    <header className={styles.main}>
      <div onClick={displayLog} className={styles.logo}>
        {logo}
      </div>

      <nav className={styles.nav}>
        <ul>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Portfolio</a>
          </li>
          <li>
            <a href="#">Contacts</a>
          </li>
        </ul>
      </nav>

      <button onClick={onBurgerBtnClick} className={styles.burgerBtn}>
        <img src={burgerBtn.src} />
      </button>

      {isDisplayMobileMenu && (
        <div className={styles.mobileMenu}>
          <nav>
            <ul>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Portfolio</a>
              </li>
              <li>
                <a href="#">Contacts</a>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
