import RootAppLoading from "components/root-app-loading";
import ThemeWrapper from "container/theme-wrapper/theme-wrapper";
import useWindowResize from "hooks/use-window-resize";
import moment from "moment-timezone";
import { AppProps } from "next/app";
import { useEffect } from "react";
import { Provider } from "react-redux";
import { GlobalStyle } from "../styles/globals";
import { store } from "../redux/store";

moment.tz.setDefault("Asia/Ho_Chi_Minh");

function App({ Component, pageProps }: AppProps) {
  const size = useWindowResize();

  useEffect(() => {
    if (window) {
      moment.tz.setDefault("Asia/Ho_Chi_Minh");
      console.log("OKK");
    }
  }, []);

  useEffect(() => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  }, [size?.height]);

  return (
    <Provider store={store}>
      <ThemeWrapper>
        <GlobalStyle />
        <Component {...pageProps} />
        <RootAppLoading />
      </ThemeWrapper>
    </Provider>
  );
}

export default App;
