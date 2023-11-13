import { NO_RESULTS } from "../../constants";
import "./errorPageSyles.scss";
import { GoBack } from "../../utils";

export const ErrorPage = () => {
  return (
    <div className="resultNotFound">
      <h3>Sorry, No results found!</h3>
      <GoBack />
      <img src={NO_RESULTS} alt="No results Img" />
    </div>
  );
};
