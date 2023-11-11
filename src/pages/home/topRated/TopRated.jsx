import { useState } from "react";

import { useFetchData } from "../../../hooks";
import { SwitchTabs, ContentWrap, Carousel } from "../../../components";
import { POPULAR_TOPRATED_DATA } from "../../../constants";

export const TopRated = () => {
  const [endpoint, setEndpoint] = useState("movie");

  const { data, loading } = useFetchData(`/${endpoint}/top_rated`);

  const onTabChange = (tab) => {
    setEndpoint(tab === "Movies" ? "movie" : "tv");
  };
  return (
    <div className="carouselSection">
      <ContentWrap>
        <span className="carouselTitle">Top Rated</span>
        <SwitchTabs data={POPULAR_TOPRATED_DATA} onTabChange={onTabChange} />
      </ContentWrap>
      <Carousel data={data?.results} loading={loading} endpoint={endpoint} />
    </div>
  );
};
