import { useState, useEffect } from 'react';
import partsAPI from '../api/parts-api';

export function useGetAllParts() {
    const [parts, setParts] = useState([]);

    useEffect(() => {
        (async () => {
            const result = await partsAPI.getAll();

            setParts(result);
        })();
    }, []);

    return [parts, setParts];
}

export function useGetOnePart(partId) {
    const [part, setPart] = useState({});

    useEffect(() => {
        (async () => {
            const result = await partsAPI.getOne(partId);

            setPart(result);
        })();
    }, [partId]);

    return [part, setPart];
}
export function useCreatePart() {
    const partCreateHandler = (partData) => partsAPI.create(partData);

    return partCreateHandler;
}