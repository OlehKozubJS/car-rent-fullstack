import { combineReducers } from "redux";

import { configureStore } from "@reduxjs/toolkit";

import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

import storage from "redux-persist/lib/storage";

const getStoreAndPersistor = ({ blacklist, whitelist }) => {
  const store = configureStore({
    reducer: persistReducer(
      { key: "root", storage, blacklist, whitelist },
      combineReducers({ ...blacklist, ...whitelist })
    ),
    middleware: (getDefaultMiddleware) => {
      getDefaultMiddleware({
        serializableCheck: {
          ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      });
    },
  });

  const persistor = persistStore(store);

  return { store, persistor };
};

export { getStoreAndPersistor };
