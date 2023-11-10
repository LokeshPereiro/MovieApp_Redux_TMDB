import { Banner, Popular, TopRated, Trending } from "./";
import "./homeStyles.scss";

export const Home = () => {
  return (
    <div className="homePage">
      <Banner />
      <Trending />
      <Popular />
      <TopRated />
    </div>
  );
};
