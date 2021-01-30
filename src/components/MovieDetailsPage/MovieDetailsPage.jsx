import styles from "./movieDetailsPage.module.css";
//import { NavLink } from "react-router-dom";

const FIND_IMG_URL = "https://image.tmdb.org/t/p/w500/";

function MovieDetailsPage({ movies }) {
  return (
    <div>
      <div className={styles.imgBox}>
        <img
          className={styles.img}
          src={`${FIND_IMG_URL}${movies.poster_path}`}
          alt={movies.title}
        />
      </div>
      <div>
        <h2>{movies.title}</h2>
        <h3>{movies.vote_average}</h3>
        <span>{movies.overview}</span>
        <span>Genres:</span>
        <ul>
          {movies.genres &&
            movies.genres.map((el) => {
              return <li key={el.id}> {el.name}</li>;
            })}
        </ul>
      </div>
    </div>
  );
}

export default MovieDetailsPage;

export { FIND_IMG_URL };
