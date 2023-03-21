import { configureStore } from "@reduxjs/toolkit";
import { usersApi } from "./usersApi";
import { devicesApi } from "./devicesApi";

export const store = configureStore({
  reducer: {
    [usersApi.reducerPath]: usersApi.reducer,
    [devicesApi.reducerPath]: devicesApi.reducer,
  },
  middleware: (defaultMiddlewear) =>
    defaultMiddlewear().concat(usersApi.middleware, devicesApi.middleware),
});
