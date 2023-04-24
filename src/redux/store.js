import { configureStore } from "@reduxjs/toolkit";
import { usersApi } from "./usersApi";
import { devicesApi } from "./devicesApi";
import {chairsApi} from './chairApi'


export const store = configureStore({
  reducer: {
    [usersApi.reducerPath]: usersApi.reducer,
    [devicesApi.reducerPath]: devicesApi.reducer,
    [chairsApi.reducerPath]: chairsApi.reducer,
  },
  middleware: (defaultMiddlewear) =>
    defaultMiddlewear().concat(usersApi.middleware, devicesApi.middleware, chairsApi.middleware),
});
