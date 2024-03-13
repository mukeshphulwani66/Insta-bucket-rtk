import { configureStore } from "@reduxjs/toolkit";
import { groceryReducer } from "./grocerySlice";
import { bucketReducer } from "./bucketSlice";
import { groceryApi } from "../services/groceryService";
import { setupListeners } from "@reduxjs/toolkit/query";



export const store = configureStore({
    reducer:{
        groceries:groceryReducer,
        myBucket:bucketReducer,
        [groceryApi.reducerPath]:groceryApi.reducer
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(groceryApi.middleware),
})


setupListeners(store.dispatch)

