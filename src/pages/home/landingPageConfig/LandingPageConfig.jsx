import { fetchDataApi } from "../../../api";
import { useDispatch } from "react-redux";
import {
  setAllGenres,
  setImgsApiConfig,
} from "../../../store/slices/renderHome";
import { useEffect } from "react";

// configImagesApi() -> setting images into redux state so that we can render elements from our store & avoid multiple api callings

export const LandingPageConfig = () => {
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
};
