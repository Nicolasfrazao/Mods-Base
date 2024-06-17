import { ApolloServer } from "apollo-server";
import mongoose from "mongoose";

import typeDefs from "./graphQL/typedefs";
import resolvers from "./graphQL/resolvers";

const PORT = process.env.SERVER_PORT || 5000;

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
});

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("MongoDB Connected");

    return apolloServer.listen({ port: PORT });
  })
  .then((res) => {
    console.log(`Server running at ${res.url}`);
  })
  .catch((err) => {
    console.log(err);
  });


