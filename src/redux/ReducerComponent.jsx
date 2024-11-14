import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import { useState } from "react";

import { getStoreAndPersistor } from "./store";

const ReducerComponent = ({ children, blacklist, whitelist }) => {
  const [{ store, persistor }] = useState(
    getStoreAndPersistor({ blacklist, whitelist })
  );

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {children}
      </PersistGate>
    </Provider>
  );
};

export { ReducerComponent };
