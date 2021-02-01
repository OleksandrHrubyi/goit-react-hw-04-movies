import styles from "../ButtonMain/buttonMain.module.css";
import { NavLink } from "react-router-dom";
import { withRouter } from "react-router-dom";

function ButtonMain({ name, path, onClick, ...props }) {
  return (
    <NavLink
      exact
      to={{ pathname: path, state: { from: props.location } }}
      className={styles.base}
      activeClassName={styles.active}
    >
      <button onClick={onClick} className={styles.btn} type="button">
        {name}
      </button>
    </NavLink>
  );
}

export default withRouter(ButtonMain);
