import Logo from "../../assets/logo-NuKenzie.svg";
import styles from "./style.module.scss";

export const Header = () => {
  return (
    <header className={styles.layout}>
      <div className="container">
        <img src={Logo} alt="Nu Kenzie" />
      </div>
    </header>
  );
};
