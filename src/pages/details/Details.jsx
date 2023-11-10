import { useParams } from "react-router-dom";
import "./detailsStyles.scss";

import { DetailsInfo } from "./";
import { useFetchData } from "../../hooks";

export const Details = () => {
  const { mediaType, id } = useParams();
  const { data, loading } = useFetchData(`/${mediaType}/${id}/videos`);

  const { data: creditsData, loading: creditsLoading } = useFetchData(
    `/${mediaType}/${id}/credits`
  );
  // console.log(creditsData);
  return (
    <div>
      <DetailsInfo video={data?.results?.[0]} crew={creditsData?.crew} />
    </div>
  );
};
