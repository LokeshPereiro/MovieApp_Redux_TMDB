import { useSelector } from "react-redux";

import "./castStyles.scss";

import avatar from "../../../assets/avatar.png";

import { ContentWrap, LazyLoadImg } from "../../../components";
import PropTypes from "prop-types";

import { SkeletonItemsCast } from "../../../utils";

export const Cast = ({ data, loading }) => {
  const { url } = useSelector((state) => state.home);

  return (
    <div className="castSection">
      <ContentWrap>
        <div className="sectionHeading">Top Cast</div>
        {!loading ? (
          <div className="listItems">
            {data?.map((item) => {
              let imgUrl = item.profile_path
                ? url.profile + item.profile_path
                : avatar;
              return (
                <div key={item.id} className="listItem">
                  <div className="profileImg">
                    <LazyLoadImg src={imgUrl} />
                  </div>
                  <div className="name">{item.name}</div>
                  <div className="character">{item.character}</div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="castSkeleton">
            <SkeletonItemsCast />
            <SkeletonItemsCast />
            <SkeletonItemsCast />
            <SkeletonItemsCast />
            <SkeletonItemsCast />
          </div>
        )}
      </ContentWrap>
    </div>
  );
};
Cast.propTypes = {
  data: PropTypes.array,
  loading: PropTypes.bool,
};
