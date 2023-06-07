// global styles
import "styles/globals.css";
// context state
import AppState from "context/AppContext";
// layout
import AppLayout from "layout/AppLayout";

const MyApp = ({ Component, pageProps }) => {
  return (
    <AppState>
      <AppLayout>
        <Component {...pageProps} />
      </AppLayout>
    </AppState>
  );
};

export default MyApp;
