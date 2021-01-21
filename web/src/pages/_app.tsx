import { ApolloProvider } from "@apollo/client";
import { AppProps } from "next/app";
import Head from "next/head";
import React from "react";
import { Provider as StoreProvider } from "react-redux";
import store from "../store";
import "../styles/globals.css";
import { client } from "../utils/withApollo";

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
      <ApolloProvider client={client}>
        <StoreProvider store={store}>
          <Component {...pageProps} />
        </StoreProvider>
      </ApolloProvider>
    </>
  );
};

export default App;
