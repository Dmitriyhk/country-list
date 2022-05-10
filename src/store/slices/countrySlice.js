import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  country: null,
};

const countrySlice = createSlice({
  name: "country",
  initialState,
  reducers: {
    setCountry(state, action) {
      state.country = action.payload.country;
    },
    removeCountry(state) {
      state.country = null;
    },
  },
});

export const { setCountry, removeCountry } = countrySlice.actions;

export default countrySlice.reducer;
