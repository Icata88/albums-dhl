import { combineReducers } from 'redux';
import { favouritesReducer } from './reducers/favourites';
import { likedImagesReducer } from './reducers/liked';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { configureStore } from '@reduxjs/toolkit';

const rootReducer = combineReducers({
    favouriteImages: favouritesReducer,
    likedImages: likedImagesReducer
});

const persistConfig = {
    key: 'root',
    storage
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({ 
    reducer: persistedReducer, 
    middleware: getDefaultMiddleware => getDefaultMiddleware({
        serializableCheck: false
    }) 
});

export const persistor = persistStore(store);


