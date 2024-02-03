import Document, {
  DocumentContext,
  Head,
  Html,
  Main,
  NextScript,
} from "next/document";
import { ServerStyleSheet } from "styled-components";

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => {
            return function CollectStyles(props: any) {
              return sheet.collectStyles(<App {...props} />);
            };
          },
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html lang="vi">
        <Head>
          <link rel="manifest" href={`${process.env.basePath}/manifest.json`} />
          {/* <link rel="preload" href={`${process.env.basePath}/font/Unbounded-Light.ttf`} as="font" crossOrigin="" />
          <link rel="preload" href={`${process.env.basePath}/font/Unbounded-Regular.ttf`} as="font" crossOrigin="" />
          <link rel="preload" href={`${process.env.basePath}/font/Unbounded-Medium.ttf`} as="font" crossOrigin="" />
          <link rel="preload" href={`${process.env.basePath}/font/Unbounded-SemiBold.ttf`} as="font" crossOrigin="" />
          <style
            dangerouslySetInnerHTML={{
              __html:
                `@font-face{font-family:"Unbounded";src:url("${process.env.basePath}/font/Unbounded-Light.ttf");font-weight:300;font-display:swap;}` +
                `@font-face{font-family:"Unbounded";src:url("${process.env.basePath}/font/Unbounded-Regular.ttf");font-weight:400;font-display:swap;}` +
                `@font-face{font-family:"Unbounded";src:url("${process.env.basePath}/font/Unbounded-Medium.ttf");font-weight:500;font-display:swap;}` +
                `@font-face{font-family:"Unbounded";src:url("${process.env.basePath}/font/Unbounded-SemiBold.ttf");font-weight:600;font-display:swap;}`,
            }}
          /> */}
        </Head>
        <body style={{ margin: 0 }}>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
