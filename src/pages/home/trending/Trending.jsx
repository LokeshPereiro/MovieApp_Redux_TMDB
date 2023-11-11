import { useState } from "react";
import { useFetchData } from "../../../hooks";

import { SwitchTabs, ContentWrap, Carousel } from "../../../components";
import { TRENDING_DATA } from "../../../constants";

export const Trending = () => {
  const [endpoint, setEndpoint] = useState("day");

  const onTabChange = (tab) => {
    setEndpoint(tab === "Day" ? "day" : "week");
  };

  const { data, loading } = useFetchData(`/trending/movie/${endpoint}`);

  return (
    <div className="carouselSection">
      <ContentWrap>
        <span className="carouselTitle">Trending Movies</span>
        <SwitchTabs dataTab={TRENDING_DATA} onTabChange={onTabChange} />
      </ContentWrap>
      <Carousel data={data?.results} loading={loading} />
    </div>
  );
};
