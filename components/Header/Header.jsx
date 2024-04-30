import { useState } from "react";

import styles from "./Header.module.css";

const Header = () => {
  const [logo, setLogo] = useState("My web page");
  const [isDisplayLogo, setDisplayLogo] = useState(false);

  const displayLog = () => {
    console.log(logo);
  };

  return (
    <header className={styles.main}>
      {isDisplayLogo && (
        <div onClick={displayLog} className={styles.logo}>
          {logo}
        </div>
      )}

      <button
        onClick={() => {
          setLogo("TYPE 20");
          setDisplayLogo(true);

          // setTimeout(() => {
          //   setLogo("TYPE 23");
          // }, 2000);
        }}
      >
        Change logo
      </button>
    </header>
  );
};

export default Header;
