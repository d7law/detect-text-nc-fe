import { LoadingKey } from "@custom-types/loading";
import { createSlice } from "@reduxjs/toolkit";
import _ from "lodash";
import { RootState } from "./store";

interface RootSliceState {
  loading: LoadingKey;
}
const initialState: RootSliceState = {
  loading: null,
};

const rootSlice = createSlice({
  name: "root",
  initialState: initialState,
  reducers: {
    clearRootSlice: () => {
      return initialState;
    },
    setLoading: (state, actions: { type: string; payload: LoadingKey }) => {
      const payload = actions.payload;
      if (_.isBoolean(actions.payload)) {
        state.loading = {
          ...state.loading,
          ...payload,
        };
      } else {
        state.loading = _.pickBy(
          { ...state.loading, ...actions.payload },
          (value) => value
        ) as LoadingKey;
      }
    },
  },
});

export const { clearRootSlice, setLoading } = rootSlice.actions;

// export const selector = {
//   loading: (state: RootState) => state.rootReducer.loading,
// };

export default rootSlice.reducer;
