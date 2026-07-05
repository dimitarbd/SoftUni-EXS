import { useState } from "react";

export default function usePersistedState(key, initialState) {
    const [state, setState] = useState(() => {
        const storedValue = localStorage.getItem(key);

        if (!storedValue) {
            return typeof initialState === 'function' ? initialState() : initialState;
        }
        const parsedValue = JSON.parse(storedValue);

        return parsedValue;
    });

    const updateState = (value) => {
        const newState = typeof value === 'function' ? value(state) : value;
        if (newState === state) {
            return;
        }

        if (newState === null || newState === undefined) {
            localStorage.removeItem(key);
            setState(null);
        } else {
            localStorage.setItem(key, JSON.stringify(newState));
        }
        
        setState(newState);
    };

    return [state, updateState];
}