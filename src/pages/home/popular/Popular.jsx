import { useState } from "react";

import { useFetchData } from "../../../hooks";
import { SwitchTabs, ContentWrap, Carousel } from "../../../components";

import { POPULAR_TOPRATED_DATA } from "../../../constants";

export const Popular = () => {
  const [endpoint, setEndpoint] = useState("movie");

  const { data, loading } = useFetchData(`/${endpoint}/popular`);

  const onTabChange = (tab) => {
    setEndpoint(tab === "Movies" ? "movie" : "tv");
  };
  return (
    <div className="carouselSection">
      <ContentWrap>
        <span className="carouselTitle">Popular</span>
        <SwitchTabs dataTab={POPULAR_TOPRATED_DATA} onTabChange={onTabChange} />
      </ContentWrap>
      <Carousel data={data?.results} loading={loading} endpoint={endpoint} />
    </div>
  );
};
