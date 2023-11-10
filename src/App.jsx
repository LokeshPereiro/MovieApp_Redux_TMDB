import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";

import { useDispatch } from "react-redux";
import { setImgsApiConfig, setAllGenres } from "./store/slices/home";

import { Footer, Header, SearchResults } from "./components";
import { ErrorPage, Home, Details, Explore } from "./pages";

import { fetchDataApi } from "./api";

//* configImagesApi() -> setting images into redux state so that we can render elements from our store & avoid multiple api callings

export const App = () => {
  const dispatch = useDispatch();

  const configImagesApi = async () => {
    const data = await fetchDataApi("/configuration");
    const imgUrls = {
      backdrop: data.images.secure_base_url + "original",
      poster: data.images.secure_base_url + "original",
      profile: data.images.secure_base_url + "original",
    };
    dispatch(setImgsApiConfig(imgUrls));
  };

  const getGenresApiIds = async () => {
    //Both TV and Movie list in 1 single array
    let promises = [];
    let endPoints = ["tv", "movie"];
    let allGenres = {};

    endPoints.forEach((url) => {
      promises.push(fetchDataApi(`/genre/${url}/list`));
    });

    const data = await Promise.all(promises);
    // console.log(data);

    //Saving Ids into our redux
    data.map(({ genres }) => {
      return genres.map((item) => (allGenres[item.id] = item));
    });

    dispatch(setAllGenres(allGenres));
  };

  useEffect(() => {
    configImagesApi();
    getGenresApiIds();
  }, []);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:mediaType/:id" element={<Details />} />
        <Route path="/search/:query" element={<SearchResults />} />
        <Route path="/explore/:mediaType" element={<Explore />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </>
  );
};
