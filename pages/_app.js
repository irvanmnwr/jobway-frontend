import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.css";
import "../styles/profile.css";
import { Provider } from "react-redux";
import Store from "../store";
import { PersistGate } from "redux-persist/integration/react";
import "../styles/responsiveProfile.css";
import "../styles/auth.css";
import "../styles/landing.css";
import "../styles/navbar.css";
import { useEffect } from "react";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
  }, []);
  return (
    <Provider store={Store.store}>
      <PersistGate loading={null} persistor={Store.persistor}>
        <Component {...pageProps} />
      </PersistGate>
    </Provider>
  );
}

export default MyApp;
