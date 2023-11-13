import { useParams } from "react-router-dom";

import { Cast, DetailsInfo, Recommendation, RelatedVideos, Similar } from "./";
import { useFetchData } from "../../hooks";

export const Details = () => {
  const { mediaType, id } = useParams();
  const { data, loading } = useFetchData(`/${mediaType}/${id}/videos`);

  const { data: creditsData, loading: creditsLoading } = useFetchData(
    `/${mediaType}/${id}/credits`
  );
  return (
    <>
      <div>
        <DetailsInfo video={data?.results?.[0]} crew={creditsData?.crew} />
        <Cast data={creditsData?.cast} loading={creditsLoading} />
        <RelatedVideos data={data} loading={loading} />
        <Similar mediaType={mediaType} id={id} />
        <Recommendation mediaType={mediaType} id={id} />
      </div>
    </>
  );
};
