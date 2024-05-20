"use client";

import { AppStore, makeStore } from "@/lib/store";
import { ReactNode, useRef } from "react";
import { Provider } from "react-redux";

interface Props {
    readonly children: ReactNode;
}

export const StoreProvider = ({ children }: Props) => {
    const storeRef = useRef<AppStore | null>(null);

    if (!storeRef.current) {
        storeRef.current = makeStore();
        // Load Initial Data here
    }

    return <Provider store={storeRef.current}>{children}</Provider>;
};