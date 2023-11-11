import { Carousel } from "../../../components";
import { useFetchData } from "../../../hooks";

export const Similar = ({ mediaType, id }) => {
  const { data, loading } = useFetchData(`/${mediaType}/${id}/similar`);
  // console.log(data);

  const title = mediaType === "tv" ? "Similar TV Shows" : "Similar Movies";

  return (
    <Carousel
      title={title}
      data={data?.results}
      loading={loading}
      endpoint={mediaType}
    />
  );
};
