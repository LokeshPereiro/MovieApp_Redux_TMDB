import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import InfiniteScroll from "react-infinite-scroll-component";

import "./searchResultsStyles.scss";
import { fetchDataApi } from "../../api";
import { ContentWrap, Spinner, MovieCard } from "../../components";
import noResultImg from "../../assets/no-results.png";

export const SearchResults = () => {
  const [data, setData] = useState(null);
  const [pageNum, setPageNum] = useState(1);
  const [loading, setLoading] = useState(false);
  const { query } = useParams();

  const fetchInitialData = async () => {
    setLoading(true);
    try {
      const res = await fetchDataApi(
        `/search/multi?query=${query}&page=${pageNum}`
      );
      setData(res);
      // setPageNum(pageNum + 1); // -> It will work but not very efficiently
      setPageNum((prev) => prev + 1);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchNextSearchData = async () => {
    try {
      const res = await fetchDataApi(
        `/search/multi?query=${query}&page=${pageNum}`
      );

      if (data?.results) {
        setData({
          ...data,
          // merging old data + new data res
          results: [...data.results, ...res.results],
        });
      } else {
        setData(res);
      }
      setPageNum((prev) => prev + 1);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    //Evertime we search for new query
    setPageNum(1);
    fetchInitialData();
  }, [query]);

  return (
    <div className="searchResultsPage">
      {loading && <Spinner initial={true} />}

      {!loading && (
        <ContentWrap>
          {data?.results?.length > 0 ? (
            <>
              <div className="pageTitle">
                {`Search ${
                  data?.total_results > 1 ? "results" : "result"
                } of '${query}'`}
              </div>
              <InfiniteScroll
                className="content"
                dataLength={data?.results?.length || []}
                next={fetchNextSearchData}
                hasMore={pageNum <= data?.total_pages}
                loader={<Spinner />}
              >
                {data?.results.map((item, index) => {
                  if (item.media_type === "person") return;
                  return <MovieCard key={index} data={item} />;
                })}
              </InfiniteScroll>
            </>
          ) : (
            <span className="resultNotFound">
              <h3>Sorry, No results found!</h3>
              <img src={noResultImg} alt="No results Img" />
            </span>
          )}
        </ContentWrap>
      )}
    </div>
  );
};
