import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { apiClient } from "@app/api";


export const store = configureStore({
  reducer: {
    [apiClient.reducerPath]: apiClient.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiClient.middleware),
});

setupListeners(store.dispatch);
