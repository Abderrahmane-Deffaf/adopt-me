import { configureStore } from "@reduxjs/toolkit";
import adoptPet from "./features/adoptPet/adoptPetSlice";
import searchParams from "./features/searchParams/searchParamsSlice";
import { petApi } from "./features/pets/petApiService";
import { setupListeners } from "@reduxjs/toolkit/query";

const store = configureStore({
  reducer: {
    adoptPet,
    searchParams,
    [petApi.reducerPath]: petApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(petApi.middleware),
});


export default store;
