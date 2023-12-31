import { useState } from "react";

import "./relatedVideosStyles.scss";

import { LazyLoadImg, ContentWrap, Video } from "../../../components";
import PropTypes from "prop-types";

import { BsYoutube } from "react-icons/bs";
import { SkeletonItemsRelatedVideo } from "../../../utils";
export const RelatedVideos = ({ data, loading }) => {
  const [show, setShow] = useState(false);
  const [videoId, setVideoId] = useState(null);

  // const loadingSkeleton = () => {
  //   return (
  //     <div className="skItem">
  //       <div className="thumb skeleton"></div>
  //       <div className="row skeleton"></div>
  //       <div className="row2 skeleton"></div>
  //     </div>
  //   );
  // };

  return (
    <div className="videosSection">
      <ContentWrap>
        <div className="sectionHeading">Official Videos</div>
        {!loading ? (
          <div className="videos">
            {data?.results?.map((video) => (
              <div
                key={video.id}
                className="videoItem"
                onClick={() => {
                  setVideoId(video.key);
                  setShow(true);
                }}
              >
                <div className="videoThumbnail">
                  <LazyLoadImg
                    src={`https://img.youtube.com/vi/${video.key}/mqdefault.jpg`}
                  />
                  <BsYoutube />
                </div>
                <div className="videoTitle">{video.name}</div>
              </div>
            ))}
          </div>
        ) : (
          <div className="videoSkeleton">
            <SkeletonItemsRelatedVideo />
            <SkeletonItemsRelatedVideo />
            <SkeletonItemsRelatedVideo />
            <SkeletonItemsRelatedVideo />
            <SkeletonItemsRelatedVideo />
          </div>
        )}
      </ContentWrap>
      <Video
        show={show}
        setShow={setShow}
        videoId={videoId}
        setVideoId={setVideoId}
      />
    </div>
  );
};

RelatedVideos.propTypes = {
  data: PropTypes.array,
  loading: PropTypes.bool,
};
