import { configureStore } from "@reduxjs/toolkit";
import { preferenceSlice } from "./preferenceSlice";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

export const store= configureStore({
    reducer:{
        preferences: preferenceSlice.reducer
    }
});

export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<ReturnType<typeof store.getState>> = useSelector;
