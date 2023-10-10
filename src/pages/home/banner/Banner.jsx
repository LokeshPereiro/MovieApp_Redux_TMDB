import { useEffect, useState } from "react";
import "./bannerStyles.scss";
import { LazyLoadImg, ContentWrap } from "../../../components";

import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useFetchData } from "../../../hooks";

export const Banner = () => {
  const [background, setBackground] = useState("");
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const { url } = useSelector((state) => state.home);
  const { data, loading } = useFetchData("/movie/upcoming");

  // console.log(data);

  useEffect(() => {
    //Pick one object from results
    const bg =
      `${url.backdrop}` +
      data?.results?.[Math.floor(Math.random() * 20)]?.backdrop_path;
    setBackground(bg);
  }, [data]);

  const searchQueryHandler = (event) => {
    if (event.key === "Enter" && query.length > 0) {
      navigate(`/search/${query}`);
    }
  };

  return (
    <div className="heroBanner">
      {!loading && (
        <div className="backdrop-img">
          <LazyLoadImg src={background} alt="background-img" />
        </div>
      )}

      <div className="opacity-layer"></div>

      <ContentWrap>
        <div className="heroBannerContent">
          <span className="title">Welcome.</span>
          <span className="subTitle">
            Enjoy Thousands of movies, TV shows and fav cast in one unique
            digital platform. Stay tunned for updated!
          </span>
          <div className="searchInput">
            <input
              type="text"
              placeholder="Search for a movie or tv show...."
              onChange={(e) => setQuery(e.target.value)}
              onKeyUp={searchQueryHandler}
            />
            <button>Search</button>
          </div>
        </div>
      </ContentWrap>
    </div>
  );
};
