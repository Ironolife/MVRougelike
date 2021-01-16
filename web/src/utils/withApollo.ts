import { ApolloClient, InMemoryCache } from "@apollo/client";
import { withApollo } from "next-apollo";

const client = new ApolloClient({
  uri: process.env.NEXT_PUBLIC_API_URL,
  credentials: "include",
  cache: new InMemoryCache()
});

export default withApollo(client);
