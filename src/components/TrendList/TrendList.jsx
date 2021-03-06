import styles from "../TrendList/trendList.module.css";
import PropTypes from "prop-types";
import { Link, withRouter } from "react-router-dom";
import { FIND_IMG_URL } from "../MovieDetailsPage/MovieDetailsPage";
import { noImage } from "../Cast/Cast";

function TrendList({ list, ...props }) {
  return (
    <div className={styles.box}>
      <ol className={styles.list}>
        {list.map((film) => {
          return (
            <li className={styles.item} key={film.id}>
              <Link
                className={styles.link}
                to={{
                  pathname: `/movies/${film.id}`,
                  state: { from: props.location },
                }}
              >
                <div className={styles.container}>
                  <div>
                    <img
                      className={styles.image}
                      src={
                        film.poster_path
                          ? `${FIND_IMG_URL}${film.poster_path}`
                          : noImage
                      }
                      alt={film.title}
                    />
                  </div>
                  <div>
                    <h2 className={styles.title}>{film.original_title}</h2>
                  </div>
                </div>
              </Link>
            </li>
          );
        })}
      </ol>
    </div>
  );
}

TrendList.propTypes = {
  list: PropTypes.array,
  props: PropTypes.object,
};

export default withRouter(TrendList);
