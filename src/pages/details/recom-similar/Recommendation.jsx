import { Carousel } from "../../../components";
import { useFetchData } from "../../../hooks";

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
