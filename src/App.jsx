import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { setImgsApiConfig } from "./store/slices/home";

import { Footer, Header, SearchResults } from "./components";
import { ErrorPage, Home, Details, Explore } from "./pages";

import { fetchDataApi } from "./api";

//* configImagesApi() -> setting images into redux state so that we can render elements from our store & avoid multiple api callings

function App() {
  const dispatch = useDispatch();
  //const { url } = useSelector((state) => state.home);
  // console.log(url);

  const configImagesApi = async () => {
    const data = await fetchDataApi("/configuration");
    // console.log(data);
    const imgUrls = {
      backdrop: data.images.secure_base_url + "original",
      poster: data.images.secure_base_url + "original",
      profile: data.images.secure_base_url + "original",
    };
    dispatch(setImgsApiConfig(imgUrls));
  };

  useEffect(() => {
    configImagesApi();
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
}

export default App;
