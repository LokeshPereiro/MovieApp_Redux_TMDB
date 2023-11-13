import { Carousel } from "../../../components";
import { useFetchData } from "../../../hooks";
import PropTypes from "prop-types";

export const Recommendation = ({ mediaType, id }) => {
  const { data, loading } = useFetchData(`/${mediaType}/${id}/recommendations`);

  return (
    <Carousel
      title="Recommendations"
      data={data?.results}
      loading={loading}
      endpoint={mediaType}
    />
  );
};

Recommendation.propTypes = {
  mediaType: PropTypes.string,
  id: PropTypes.string,
};
