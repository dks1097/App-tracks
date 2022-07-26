import createDataContext from "./createDataContext";
import tracker from "../api/tracker";

const trackReducer = (state, action) => {
  switch (action.type) {
    case "FETCH_TRACKS":
      return action.payload;
    default:
      return state;
  }
};

const fetchTracks = (dispatch) => async () => {
  const response = await tracker.get("/tracks");

  dispatch({ type: "FETCH_TRACKS", payload: response.data });
};

const createTrack = (dispatch) => async (name, locations) => {
  await tracker.post("/tracks", { name, locations });

  console.log(name, locations.length);
};

export const { Context, Provider } = createDataContext(
  trackReducer,
  { fetchTracks, createTrack },
  []
);
