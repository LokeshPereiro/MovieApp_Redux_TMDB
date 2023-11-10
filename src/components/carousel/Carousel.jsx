import { useNavigate } from "react-router-dom";
import { useRef } from "react";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";

import { ContentWrap, LazyLoadImg, Rating, Genres } from "../";
import { SkeletonItemsCarousel, FormatDates } from "../../utils";

import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";

import "./carouselStyles.scss";
import PosterFallback from "../../assets/no-poster.png";

export const Carousel = ({ data, loading, endpoint }) => {
  const { url } = useSelector((state) => state.home);
  const navigate = useNavigate();

  const carouselDiv = useRef();

  const carouselMovement = (direction) => {
    const container = carouselDiv.current;
    const scrollAmount =
      direction === "left"
        ? container.scrollLeft - (container.offsetWidth + 20)
        : container.scrollLeft + (container.offsetWidth + 20);

    container.scrollTo({
      left: scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <div className="carousel">
      <ContentWrap>
        <BsFillArrowLeftCircleFill
          className="carouselLeftNav arrow"
          onClick={() => carouselMovement("left")}
        />
        <BsFillArrowRightCircleFill
          className="carouselRighttNav arrow"
          onClick={() => carouselMovement("right")}
        />

        {/* Show  loadingSkeleton */}
        {!loading ? (
          <div className="carouselItems" ref={carouselDiv}>
            {data?.map((item) => {
              const posterUrl = item.poster_path
                ? url.poster + item.poster_path
                : PosterFallback;
              return (
                <div
                  key={item.id}
                  className="carouselItem"
                  onClick={() =>
                    navigate(`/${item.media_type || endpoint}/${item.id}`)
                  }
                >
                  <div className="posterBlock">
                    <LazyLoadImg src={posterUrl} />
                    <Rating rating={item.vote_average.toFixed(1)} />
                    <Genres data={item.genre_ids.slice(0, 2)} />
                  </div>
                  <div className="textBlock">
                    <span className="title">{item.title || item.name}</span>
                    <span className="date">
                      {FormatDates(item.release_date || item.first_air_date)}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="loadingSkeleton">
            <SkeletonItemsCarousel />
            <SkeletonItemsCarousel />
            <SkeletonItemsCarousel />
            <SkeletonItemsCarousel />
            <SkeletonItemsCarousel />
          </div>
        )}
      </ContentWrap>
    </div>
  );
};

Carousel.propTypes = {
  data: PropTypes.array,
  loading: PropTypes.bool,
  endpoint: PropTypes.string,
};
