import octokit from "../clients/github-client";
import TYPES from "./types";

export const fetchRepoPullRequests =
  (ownerName, repoName, page = 1, max__result_per_page = 30) =>
  async (dispatch) => {
    try {
      dispatch({
        type: TYPES.FETCH_PR_REQUEST,
      });

      const response = await octokit.request(
        "GET /repos/{owner}/{repo}/pulls",
        {
          owner: ownerName,
          repo: repoName,
          page: page,
          per_page: max__result_per_page,
          state: "all",
        }
      );

      setTimeout(() => {
        return dispatch({
          type: TYPES.FETCH_PR_SUCCESS,
          payload: response.data,
        });
      }, 2000);
    } catch (error) {
      return dispatch({
        type: TYPES.FETCH_PR_FAILURE,
      });
    }
  };
