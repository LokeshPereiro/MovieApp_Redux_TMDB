import { useState } from "react";
import { SwitchTabs, ContentWrap, Carousel } from "../../../components";
import "./stylesTrending.scss";
import { useFetchData } from "../../../hooks";

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
        <span className="carouselTitle">Trending</span>
        <SwitchTabs data={["Day", "Week"]} onTabChange={onTabChange} />
      </ContentWrap>
      <Carousel data={data?.results} loading={loading} />
    </div>
  );
};
