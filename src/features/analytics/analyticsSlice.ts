import { createSlice } from "@reduxjs/toolkit";
interface analyticsinterface {
  id: number;
  name: string;
}
const initialState: analyticsinterface = {
  id: 0,
  name: "",
};

export const analyticsSlice = createSlice({
  name: "analytics",
  initialState,
  reducers: {
    clickcard: (state, action) => {
      state.id = action.payload;
    },
    breadcrumdsname: (state, action) => {
      state.name = action.payload;
    },
  },
});

export const { clickcard, breadcrumdsname } = analyticsSlice.actions;
export default analyticsSlice.reducer;
