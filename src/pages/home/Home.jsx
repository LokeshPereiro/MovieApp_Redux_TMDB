import { LandingPageConfig } from "./";
import { Banner, Popular, TopRated, Trending } from "./";
import "./homeStyles.scss";

export const Home = () => {
  return (
    <>
      <LandingPageConfig />
      <div className="homePage">
        <Banner />
        <Trending />
        <Popular />
        <TopRated />
      </div>
    </>
  );
};
