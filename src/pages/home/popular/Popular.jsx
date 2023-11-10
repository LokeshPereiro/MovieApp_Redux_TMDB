import { useState } from "react";
import { useFetchData } from "../../../hooks";
import "./popularStyles.scss";

import { SwitchTabs, ContentWrap, Carousel } from "../../../components";

export const Popular = () => {
  const [endpoint, setEndpoint] = useState("movie");

  const { data, loading } = useFetchData(`/${endpoint}/popular`);
  // console.log(data);
  const onTabChange = (tab) => {
    setEndpoint(tab === "Movies" ? "movie" : "tv");
    // console.log(tab);
  };
  return (
    <div className="carouselSection">
      <ContentWrap>
        <span className="carouselTitle">Popular</span>
        <SwitchTabs data={["Movies", "TV Shows"]} onTabChange={onTabChange} />
      </ContentWrap>
      <Carousel data={data?.results} loading={loading} endpoint={endpoint} />
    </div>
  );
};
