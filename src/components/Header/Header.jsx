import styles from "../Header/header.module.css";
import PropTypes from "prop-types";

function Header({ children }) {
  return <div className={styles.container}>{children}</div>;
}

export default Header;

Header.propTypes = {
  children: PropTypes.node,
};
