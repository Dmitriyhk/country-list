import { configureStore } from "@reduxjs/toolkit";
import { countryApi } from "./slices/countryApiSlices";
import countryReducer from "./slices/countrySlice";
import favoritesReducer from "./slices/favoritesSlice";

export const store = configureStore({
  reducer: {
    [countryApi.reducerPath]: countryApi.reducer,
    country: countryReducer,
    favorites: favoritesReducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(countryApi.middleware),
});
