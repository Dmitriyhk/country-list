import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favorites: [],
};
const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addArrCountries(state, action) {
      state.favorites = action.payload.arr;
    },
    addCountry(state, action) {
      state.favorites.push(action.payload.favorites);
    },
    delCountry(state, action) {
      state.favorites = [
        ...state.favorites.slice(0, action.payload.countryId),
        ...state.favorites.slice(action.payload.countryId + 1),
      ];
    },
  },
});

export const { addCountry, delCountry, addArrCountries } =
  favoritesSlice.actions;

export default favoritesSlice.reducer;
