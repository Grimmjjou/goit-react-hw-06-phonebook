import { configureStore } from '@reduxjs/toolkit';
import contactReducer from './contacts';
import filterReducer from './filter'
import {
    persistStore,
    persistReducer,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
    key: 'contacts',
    storage,
};

const persistedReducer = persistReducer(persistConfig, contactReducer);

export const store = configureStore({
    reducer: {
        contacts: persistedReducer,
        filter: filterReducer,
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});

export const persistor = persistStore(store);