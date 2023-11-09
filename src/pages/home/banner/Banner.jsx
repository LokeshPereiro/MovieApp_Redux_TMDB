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

  const onInputChange = (evt) => {
    setQuery(evt.target.value);
  };

  const handleSearchQuery = (evt) => {
    evt.preventDefault();
    navigate(`/search/${query}`);
    setQuery("");
  };

  useEffect(() => {
    //Pick one random img from 20 possible results
    const bannerBg =
      `${url.backdrop}` +
      data?.results?.[Math.floor(Math.random() * 20)]?.backdrop_path;
    setBackground(bannerBg);
  }, [data]);

  return (
    <div className="heroBanner">
      {!loading && (
        <div className="backdrop-img">
          <LazyLoadImg src={background} alt="background-img" />
        </div>
      )}

      <div className="layer"></div>

      <ContentWrap>
        <div className="heroBannerContent unselectable">
          <span className="title">Welcome, {"Lokesh"}</span>
          <span className="subTitle">
            Now you can enjoy thousands of Movies, TV shows and your fav. Cast
            for free in this unique digital platform.
          </span>
          <form className="searchInput" onSubmit={handleSearchQuery}>
            <input
              type="text"
              placeholder="Search your fav movie or tv show..."
              onChange={onInputChange}
              value={query}
            />
            <button type="submit">Search</button>
          </form>
        </div>
      </ContentWrap>
    </div>
  );
};
