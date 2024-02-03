import MainLayout from "../main-layout/main-layout";
import { MainContent } from "../main-layout/styled";
import Head from "next/head";
import { useRouter } from "next/router";
import { Fragment, useEffect, useMemo, useState } from "react";
import { DefaultTheme } from "styled-components";

export type ThemeWrapperProps = {
  children: React.ReactNode;
  theme?: DefaultTheme;
};

const ThemeWrapper = ({ children, theme }: ThemeWrapperProps) => {
  const [showing, setShowing] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setShowing(true);
  }, []);

  useEffect(() => {
    const listener = function (ev: MouseEvent) {
      const button = ev.target as HTMLButtonElement;
      if (button.tagName === "BUTTON" && !button.disabled) {
        const clickable = button.dataset.clickable;
        if (clickable === "false") {
          ev.preventDefault();
          ev.stopPropagation();
          return;
        }
        button.dataset.clickable = "false";
        button.style.pointerEvents = "none";
        setTimeout(() => {
          button.dataset.clickable = "true";
          button.style.pointerEvents = "";
        }, 300);
      }
    };
    document.addEventListener("click", listener);
    return () => {
      document.removeEventListener("click", listener);
    };
  }, []);

  const Layout = useMemo(() => {
    if (["/_error"].includes(router.pathname)) {
      return Fragment;
    }
    return MainLayout;
  }, [router.pathname]);

  //Fix Text content does not match server-rendered HTML.
  if (!showing) {
    return null;
  }

  return (
    // <ThemeProvider theme={theme}>
    <>
      <Head>
        <link rel="icon" href={`${process.env.basePath}/favicon.ico`} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* <meta name="theme-color" content={theme.color.text.body} /> */}
        <meta name="description" content="DTNC" />
        <title>Text Detect NC</title>
      </Head>
      <Layout>
        <MainContent>{children}</MainContent>
      </Layout>
    </>
  );
};

export default ThemeWrapper;
