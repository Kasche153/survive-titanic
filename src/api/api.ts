import ApolloClient, { gql } from "apollo-boost";
import { URL } from "./api-config";

const defaultApolloSettings = {
  uri: URL
};
class APIHandler {
  client: ApolloClient<any>;
  constructor() {
    this.client = new ApolloClient({
      ...defaultApolloSettings
    });
  }
  async makeQuery(query: string) {
    const res = await this.client.query({ query: gql(query) });
    return res.data;
  }
  async makeMutation(mutation: string) {
    const res = await this.client.mutate({ mutation: gql(mutation) });
    return res.data;
  }
}

export const api = new APIHandler();
