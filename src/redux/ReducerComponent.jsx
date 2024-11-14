import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

const ReducerComponent = ({ children }) => {
  return (
    <Provider>
      <PersistGate>{children}</PersistGate>
    </Provider>
  );
};

export { ReducerComponent };
