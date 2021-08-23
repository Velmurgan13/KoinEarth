import React, { useCallback, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Virtuoso } from "react-virtuoso";
import Row from "./Row";
import { fetchRepoPullRequests } from "../../actions/github-api";

function Rows(props) {
  const dispatch = useDispatch();
  const { pullRequests } = useSelector((state) => state.github);

  let pageNumber = 1;
  const loadMore = useCallback(() => {
    return setTimeout(() => {
      dispatch(fetchRepoPullRequests("neovim", "neovim", pageNumber++));
    }, 100);
  }, [pageNumber, dispatch]);

  useEffect(() => {
    const timeout = loadMore();
    return () => clearTimeout(timeout);
  }, [loadMore]);

  return (
    <Virtuoso
      className="h-full w-full"
      style={{ height: "800px" }}
      data={pullRequests}
      endReached={loadMore}
      overscan={30}
      itemContent={(index, pullRequest) => {
        return <Row pullRequest={pullRequest} />;
      }}
      components={{
        Footer: () => {
          return (
            <div className="flex flex-col w-full items-center justify-center justify-items-center py-4">
              <div className="animate-spin rounded-full h-9 w-9 border-b-2 border-primary"></div>
              <strong className="text-sm mt-3">Loading.. please wait</strong>
            </div>
          );
        },
      }}
    />
  );
}

export default Rows;
