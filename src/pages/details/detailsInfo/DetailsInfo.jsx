import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import "./detailsInfoStyles.scss";

import {
  ContentWrap,
  Genres,
  Rating,
  LazyLoadImg,
  Video,
} from "../../../components";
import { PlayIconBtn } from "../";

import { useFetchData } from "../../../hooks";

import { SkeletonItemsInfo, FormatDates } from "../../../utils";
import PosterFallback from "../../../assets/no-poster.png";

export const DetailsInfo = ({ video, crew }) => {
  const [show, setShow] = useState(false);
  const [videoId, setVideoId] = useState(null);

  const { mediaType, id } = useParams();
  //   console.log(mediaType, id);
  const { data, loading } = useFetchData(`/${mediaType}/${id}`);
  const { url } = useSelector((state) => state.home);

  const _genres = data?.genres?.map((g) => g.id);

  const director = crew?.filter((d) => d.job === "Director");

  const writer = crew?.filter(
    (f) => f.job === "Screenplay" || f.job === "Story" || f.job === "Writer"
  );

  const toHoursAndMinutes = (totalMinutes) => {
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;
    return `${hours}h${minutes > 0 ? ` ${minutes}m` : ""}`;
  };

  return (
    <div className="detailsBanner">
      {!loading ? (
        <>
          {!!data && (
            <>
              <div className="backdrop-img">
                <LazyLoadImg src={url.backdrop + data.backdrop_path} />
              </div>
              <div className="opacity-layer"></div>
              <ContentWrap>
                <div className="content">
                  <div className="left">
                    {data?.poster_path ? (
                      <LazyLoadImg
                        className="posterImg"
                        src={url.backdrop + data.poster_path}
                      />
                    ) : (
                      <LazyLoadImg src={PosterFallback} />
                    )}
                  </div>
                  <div className="right">
                    <div className="title">{`${data.name || data.title}`}</div>
                    <div className="subtitle">{data?.tagline}</div>
                    <Genres data={_genres} />
                    <div className="row">
                      <Rating rating={data.vote_average.toFixed(1)} />
                      <div
                        className="playbtn"
                        onClick={() => {
                          setShow(true);
                          setVideoId(video.key);
                        }}
                      >
                        <PlayIconBtn />
                        <span className="text">Watch Trailer</span>
                      </div>
                    </div>
                    <div className="overview">
                      <div className="heading">Overview</div>
                      <div className="description">{data?.overview}</div>
                    </div>
                    <div className="info">
                      {data?.status && (
                        <div className="infoItem">
                          <span className="text bold">
                            Status: <span className="text">{data.status}</span>
                          </span>
                        </div>
                      )}
                      {data?.release_date && (
                        <div className="infoItem">
                          <span className="text bold">
                            Release Date:{" "}
                            <span className="text">
                              {FormatDates(data.release_date)}
                            </span>
                          </span>
                        </div>
                      )}
                      {data?.runtime && (
                        <div className="infoItem">
                          <span className="text bold">
                            Runtime:{" "}
                            <span className="text">
                              {toHoursAndMinutes(data.runtime)}
                            </span>
                          </span>
                        </div>
                      )}
                      {data?.homepage && (
                        <div className="infoItem">
                          <span className="text bold">
                            Homepage:{" "}
                            <span className="text">
                              <Link to={data.homepage} target="_blank">
                                {data.homepage}
                              </Link>
                            </span>
                          </span>
                        </div>
                      )}
                    </div>
                    {director?.length > 0 && (
                      <div className="info">
                        <span className="text bold">Director: </span>
                        <span className="text">
                          {director?.map((d, idx) => (
                            <span key={idx}>
                              {d.name}
                              {director.length - 1 !== idx && ", "}
                              {/* {director.length > 1 ? d.name + ", " : d.name} */}
                            </span>
                          ))}
                        </span>
                      </div>
                    )}
                    {writer?.length > 0 && (
                      <div className="info">
                        <span className="text bold">Writer: </span>
                        <span className="text">
                          {writer?.map((w, idx) => (
                            <span key={idx}>
                              {w.name}
                              {writer.length - 1 !== idx && ", "}
                            </span>
                          ))}
                        </span>
                      </div>
                    )}
                    {/* TV creator*/}
                    {data.created_by?.length > 0 && (
                      <div className="info">
                        <span className="text bold">Creator: </span>
                        <span className="text">
                          {data?.created_by?.map((c, idx) => (
                            <span key={idx}>
                              {c.name}
                              {data?.created_by.length - 1 !== idx && ", "}
                            </span>
                          ))}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
                <Video
                  show={show}
                  setShow={setShow}
                  videoId={videoId}
                  setVideoId={setVideoId}
                />
              </ContentWrap>
            </>
          )}
        </>
      ) : (
        <div className="detailsBannerSkeleton">
          <ContentWrap>
            <div className="left skeleton"></div>
            <div className="right">
              <SkeletonItemsInfo />
              <SkeletonItemsInfo />
              <SkeletonItemsInfo />
              <SkeletonItemsInfo />
              <SkeletonItemsInfo />
            </div>
          </ContentWrap>
        </div>
      )}
    </div>
  );
};
