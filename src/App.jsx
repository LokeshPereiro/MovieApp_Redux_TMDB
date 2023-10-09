import "./App.css";
fetchDataApi;
import { fetchDataApi } from "./api";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getApiConfig } from "./store/slices/home";

function App() {
  const dispatch = useDispatch();
  const { url } = useSelector((state) => state.home);
  // console.log(url?.total_results);

  const apiTest = async () => {
    const data = await fetchDataApi("/movie/popular");
    // console.log(data);
    dispatch(getApiConfig(data));
  };

  useEffect(() => {
    apiTest();
  }, []);
  return <>App</>;
}

export default App;
