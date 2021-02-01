import styles from "./movieDetailsPage.module.css";
import { withRouter } from "react-router-dom";
import ButtonMain from "../ButtonMain/ButtonMain";

export const FIND_IMG_URL = "https://image.tmdb.org/t/p/w500/";

function MovieDetailsPage({ movies, match, onClick }) {
  return (
    <>
      <button className={styles.btn} type="button" onClick={onClick}>
        go back
      </button>
      <div className={styles.container}>
        <div className={styles.imgBox}>
          <img
            className={styles.img}
            src={`${FIND_IMG_URL}${movies.poster_path}`}
            alt={movies.title}
          />
        </div>
        <div className={styles.info}>
          <h2>{movies.title}</h2>
          <h3>Rating: {movies.vote_average}</h3>
          <h4>Overview:</h4> <span>{movies.overview}</span>
          <h4>Genres:</h4>
          <ul>
            {movies.genres &&
              movies.genres.map((el) => {
                return <li key={el.id}> {el.name}</li>;
              })}
          </ul>
        </div>
      </div>
      <ButtonMain name="Cast" path={`${match.url}/cast`} />
      <ButtonMain name="Review" path={`${match.url}/review`} />
    </>
  );
}

export default withRouter(MovieDetailsPage);
