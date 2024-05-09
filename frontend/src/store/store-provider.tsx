"use client";
import { setupListeners } from "@reduxjs/toolkit/query";
import type { ReactNode } from "react";
import { useEffect, useRef } from "react";
import { Provider, TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { store } from "./store";

interface Props {
  readonly children: ReactNode;
}

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const StoreProvider = ({ children }: Props) => {
    const storeRef = useRef<typeof store | null>(null);

    if (!storeRef.current) {
        storeRef.current = store;
    }

    useEffect(() => {
        if (storeRef.current != null) {
            return setupListeners(storeRef.current.dispatch);
        }
    }, []);

    return <Provider store={storeRef.current}>{children}</Provider>;
};