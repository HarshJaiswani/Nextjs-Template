import React from "react";
// Next Components
import Head from "next/head";
// font
import { Inter } from "next/font/google";
// progress bar
import NextNProgress from "nextjs-progressbar";
// toast
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const inter = Inter({ subsets: ["latin"] });

const AppLayout = (props) => {
  const { children, title, description, keywords, image, url } = props;

  const defaultTitle = "App's Title";
  const defaultDescription = "Description of App";
  const defaultUrl = "URL of App";
  const defaultKeywords = "Keywords for App";
  const defaultImage = "Logo of App";
  return (
    <main className={inter.className}>
      <Head>
        <title>{title || defaultTitle}</title>
        <meta name="description" content={description || defaultDescription} />
        <meta property="og:title" content={title || defaultTitle} />
        <meta
          property="og:description"
          content={description || defaultDescription}
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={url || defaultUrl} />
        <meta property="og:image" content={image || defaultImage} />
        <meta name="keywords" content={keywords || defaultKeywords} />
        <meta name="author" content="Harsh Jaiswani" />

        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="manifest" href="manifest.json" />

        <meta name="twitter:title" content={title || defaultTitle} />
        <meta
          name="twitter:description"
          content={description || defaultDescription}
        />
        <meta name="twitter:image" content={image || defaultImage} />

        <noscript>
          Give Power of Javascript to Your Browser Engine to Have Embrase the
          Beauty of this App
        </noscript>
      </Head>
      <NextNProgress
        color="rgb(243,244,246)"
        options={{ showSpinner: false }}
      />
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={true}
        newestOnTop={true}
        closeButton={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <>{children}</>
    </main>
  );
};

export default AppLayout;
