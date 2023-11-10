import { useState } from "react";
import "./topRatedStyles.scss";

import { useFetchData } from "../../../hooks";
import { SwitchTabs, ContentWrap, Carousel } from "../../../components";

export const TopRated = () => {
  const [endpoint, setEndpoint] = useState("movie");

  const { data, loading } = useFetchData(`/${endpoint}/top_rated`);
  // console.log(data);
  const onTabChange = (tab) => {
    setEndpoint(tab === "Movies" ? "movie" : "tv");
    // console.log(tab);
  };
  return (
    <div className="carouselSection">
      <ContentWrap>
        <span className="carouselTitle">Top Rated</span>
        <SwitchTabs data={["Movies", "TV Shows"]} onTabChange={onTabChange} />
      </ContentWrap>
      <Carousel data={data?.results} loading={loading} endpoint={endpoint} />
    </div>
  );
};
