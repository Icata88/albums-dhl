import React, { useContext, createContext } from 'react';
import { useContextState } from './state'; 

const Context = createContext(undefined);

export const useAlbums = () => {
    const context = useContext(Context);
    if (context === undefined) {
        throw new Error(
            'Album context value is undefined. Make sure you use the AlbumProvider before using this context.'
        )
    }
    return context;
}

export const AlbumProvider = ({
    children
}) => {
    const state = useContextState();
    return <Context.Provider {...{ children}} value={state} />;
}