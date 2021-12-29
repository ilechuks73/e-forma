import { Fragment } from "react";
import styles from './Header.module.css';

function Header(props){
  return (
    <Fragment>
      <nav className={styles.navigation}>
        <b>Home</b>
      </nav>
    </Fragment>
  );
}

export default Header;