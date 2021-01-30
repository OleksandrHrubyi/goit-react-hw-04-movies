import styles from "../TrendList/trendList.module.css";
import { Link } from "react-router-dom";

function TrendList({ list }) {
  return (
    <>
      <ol>
        {list.map((film) => {
          return (
            <li key={film.id}>
              <Link to={`/movies/${film.id}`}>
                <h2 className={styles.title}>{film.original_title}</h2>
              </Link>
            </li>
          );
        })}
      </ol>
    </>
  );
}

export default TrendList;
