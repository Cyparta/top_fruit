import { configureStore } from "@reduxjs/toolkit";

import { api } from "../features/api/api";
import analyticsSlice from "@/features/analytics/analyticsSlice";


export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    analytics: analyticsSlice,
    // properties: propertiesSlice,
    // filter: filterSlice,
    // agent: agentSlice,
    // lang: langSlice,
    // building: buildingSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});
