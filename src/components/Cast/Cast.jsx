import { FIND_IMG_URL } from "../MovieDetailsPage/MovieDetailsPage";
import styles from "./cast.module.css";
import PropTypes from "prop-types";

export const noImage =
  "https://stolica-dent.ru/content/photos/opinion/217/main/783/defaultuser_.png";

function Cast({ cast }) {
  return (
    <ul className={styles.list}>
      {cast.map((el) => {
        return (
          <li className={styles.item} key={el.id}>
            <img
              className={styles.img}
              src={
                el.profile_path ? `${FIND_IMG_URL}${el.profile_path}` : noImage
              }
              alt={el.name}
            />
            <div className={styles.info}>
              <h3>{el.name}</h3>
              <h4>{el.character}</h4>
            </div>
          </li>
        );
      })}
    </ul>
  );
}

Cast.propTypes = {
  cast: PropTypes.array,
};

export default Cast;
