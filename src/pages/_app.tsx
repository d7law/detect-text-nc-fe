import type { AppProps } from "next/app";
import useWindowResize from "../hooks/use-window-resize/index";
import { useEffect } from "react";
import moment from "moment-timezone";
import { GlobalStyle } from "../styles/globals";
import ThemeWrapper from "../container/theme-wrapper/theme-wrapper";
import RootAppLoading from "components/root-app-loading";
import { Provider } from "react-redux";
import { store } from "../redux/store";

moment.tz.setDefault("Asia/Ho_Chi_Minh");

export default function App({ Component, pageProps }: AppProps) {
  const size = useWindowResize();

  useEffect(() => {
    if (window) {
      moment.tz.setDefault("Asia/Ho_Chi_Minh");
      console.log(`${moment().format("YYYY/MM/DD")}`);
    }
  }, []);

  useEffect(() => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  }, [size?.height]);
  return (
    <Provider store={store}>
      <ThemeWrapper>
        <GlobalStyle>
          <Component {...pageProps} />
          <RootAppLoading />
        </GlobalStyle>
      </ThemeWrapper>
    </Provider>
  );
}
