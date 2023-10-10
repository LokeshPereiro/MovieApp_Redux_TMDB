import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

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
