import { FIND_IMG_URL } from "../MovieDetailsPage/MovieDetailsPage";

function Cast({ cast }) {
  return (
    <ul>
      {cast.map((el) => {
        return (
          <li key={el.id}>
            <img src={`${FIND_IMG_URL}${el.profile_path}`} alt={el.name} />
            <h3>{el.name}</h3>
            <h4>{el.character}</h4>
          </li>
        );
      })}
    </ul>
  );
}

export default Cast;
