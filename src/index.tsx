import ReactDOM from "react-dom/client";
import "./styles/tailwind.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import React from "react";

import { Provider } from "react-redux";
import { PersistGate } from 'redux-persist/integration/react';
import {store, persistor} from "./store/store"

ReactDOM.createRoot(document.getElementById("root")!).render(
 
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>

);

serviceWorker.unregister();
