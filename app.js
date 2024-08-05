const express = require("express");
const compression = require("compression");
const { GraphQLObjectType, GraphQLSchema } = require("graphql");
const { graphqlHTTP } = require("express-graphql");

const { commonErrorHandler } = require("./helpers/common-function.helper");
const routes = require("./routes");
const userQueries = require("./graphql/user/query");
const postQueries = require("./graphql/post/query");
const userMutations = require("./graphql/user/mutations");
const postMutations = require("./graphql/post/mutations");

const app = express();
app.use(express.json());

// gzip compression module
app.use(compression());

app.use("/health", (_req, res) => {
  res.send({ message: "Application running successfully!" });
});

// GraphQL
const query = new GraphQLObjectType({
  name: "Query",
  fields: {
    ...userQueries,
    ...postQueries,
  },
});

const mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    ...userMutations,
    ...postMutations,
  },
});

routes.registerRoutes(app);

app.use(
  "/graphql",
  graphqlHTTP({
    schema: new GraphQLSchema({
      query,
      mutation,
    }),
    graphiql: true,
  })
);

// 404 Error Handling
app.use((req, res) => {
  const message = "Invalid endpoint";
  const statusCode = 404;
  commonErrorHandler(req, res, message, statusCode);
});

module.exports = app;
