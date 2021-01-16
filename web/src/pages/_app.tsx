import { AppProps } from "next/app";
import React from "react";
import "../styles/globals.css";
import { Provider as StoreProvider } from "react-redux";
import store from "../store";
import Head from "next/head";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>MVRougelike</title>
        <meta name="description" content="description"></meta>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
      </Head>
      <StoreProvider store={store}>
        <Component {...pageProps} />
      </StoreProvider>
    </>
  );
};

export default App;
