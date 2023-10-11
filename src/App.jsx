import "./App.css";
fetchDataApi;
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { fetchDataApi } from "./api";
import { getApiConfig } from "./store/slices/home";

import { Footer, Header, SearchResults } from "./components";
import { ErrorPage, Home, Details, Explore } from "./pages";

import { Route, Routes } from "react-router-dom";

function App() {
  const dispatch = useDispatch();
  const { url } = useSelector((state) => state.home);
  // console.log(url);

  const apiTest = async () => {
    const data = await fetchDataApi("/configuration");
    // console.log(data);
    const imgUrl = {
      backdrop: data.images.secure_base_url + "original",
      poster: data.images.secure_base_url + "original",
      profile: data.images.secure_base_url + "original",
    };
    dispatch(getApiConfig(imgUrl));
  };

  useEffect(() => {
    apiTest();
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
