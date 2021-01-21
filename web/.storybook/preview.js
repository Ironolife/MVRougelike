import { ApolloProvider } from "@apollo/client";
import { Provider as StoreProvider } from "react-redux";
import store from "../src/store";
import "../src/styles/globals.css";
import { client } from "../src/utils/withApollo";
import Loader from "./Loader";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" }
};

export const decorators = [
  (Story) => (
    <ApolloProvider client={client}>
      <StoreProvider store={store}>
        <Loader>
          <Story />
        </Loader>
      </StoreProvider>
    </ApolloProvider>
  )
];
