import TYPES from "../actions/types";
const initialState = {
  loading: false,
  pullRequests: [],
};

export function github(state = initialState, action) {
  let response = {};

  switch (action.type) {
    case TYPES.FETCH_PR_REQUEST:
      response = {
        ...state,
        loading: true,
      };
      break;

    case TYPES.FETCH_PR_SUCCESS:
      response = {
        ...state,
        loading: false,
        pullRequests: state.pullRequests.concat(action.payload),
      };
      break;

    case TYPES.FETCH_PR_FAILURE:
      response = {
        ...state,
        loading: false,
        error: "Something went wrong",
      };
      break;

    default:
      response = state;
  }

  return response;
}
