// pages/_document.js
import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link
            rel="icon"
            href="https://cdn-icons-png.flaticon.com/512/4336/4336400.png"
          />
          <meta
            name="description"
            content="A social media app built with the MERN stack and TailwindCSS"
            key="desc"
          />
          <meta
            property="og:title"
            content="A social media app built with the MERN stack and TailwindCSS"
          />
          <meta
            property="og:description"
            content="A social media app built with the MERN stack and TailwindCSS"
          />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
