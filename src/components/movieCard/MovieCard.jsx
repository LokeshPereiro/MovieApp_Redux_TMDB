import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import "./movieCardStyles.scss";
import { LazyLoadImg, Rating, Genres } from "..";

import PosterFallback from "../../assets/no-poster.png";

import { FormatDates } from "../../utils";

export const MovieCard = ({ data, mediaType }) => {
  const { url } = useSelector((state) => state.home);
  const navigate = useNavigate();
  const posterUrl = data.poster_path
    ? url.poster + data.poster_path
    : PosterFallback;
  return (
    <div
      className="movieCard"
      onClick={() => navigate(`/${data.media_type || mediaType}/${data.id}`)}
    >
      <div className="posterBlock">
        <LazyLoadImg className="posterImg" src={posterUrl} />

        <>
          <Rating rating={data.vote_average.toFixed(1)} />
          <Genres data={data.genre_ids.slice(0, 2)} />
        </>
      </div>
      <div className="textBlock">
        <span className="title">{data.title || data.name}</span>
        <span className="date">{FormatDates(data.release_date)}</span>
      </div>
    </div>
  );
};
