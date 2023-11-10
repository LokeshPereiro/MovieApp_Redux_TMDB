import { useState } from "react";
import { useFetchData } from "../../../hooks";

import { SwitchTabs, ContentWrap, Carousel } from "../../../components";

export const Trending = () => {
  const [endpoint, setEndpoint] = useState("day");

  const { data, loading } = useFetchData(`/trending/movie/${endpoint}`);
  // console.log(data);
  const onTabChange = (tab) => {
    setEndpoint(tab === "Day" ? "day" : "week");
    // console.log(tab);
  };
  return (
    <div className="carouselSection">
      <ContentWrap>
        <span className="carouselTitle">Trending Movies</span>
        <SwitchTabs data={["Day", "Week"]} onTabChange={onTabChange} />
      </ContentWrap>
      <Carousel data={data?.results} loading={loading} />
    </div>
  );
};
