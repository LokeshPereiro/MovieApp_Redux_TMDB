import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import PropTypes from "prop-types";

export const LazyLoadImg = ({ className, src }) => {
  return (
    <LazyLoadImage
      className={className || ""}
      alt="lazyLoadImg"
      effect="blur"
      src={src}
    />
  );
};
LazyLoadImg.propTypes = {
  className: PropTypes.string,
  src: PropTypes.string,
};
