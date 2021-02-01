import { FIND_IMG_URL } from "../MovieDetailsPage/MovieDetailsPage";
import styles from "./cast.module.css";

export const noImage =
  "https://lh3.googleusercontent.com/proxy/ptWxutV8AYOCMx0VP05haGvIkZHkBnGe2dxirgMpUV-TdZ6c2FMXE_J8ceCgNlmeLWIuMIWvvKeWicAdkKFPtqUmyVqWZRwU1k-QJlOPk2XSXKnevWWn";

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
            <h3>{el.name}</h3>
            <h4>{el.character}</h4>
          </li>
        );
      })}
    </ul>
  );
}

// `${FIND_IMG_URL}${el.profile_path}`

export default Cast;
