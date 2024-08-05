const { GraphQLString, GraphQLNonNull } = require("graphql");
const UserType = require("./typeDef");
const { User } = require("./../../models");

// Create a new user
const createUser = {
  type: UserType,
  args: {
    name: { type: GraphQLNonNull(GraphQLString) },
    email: { type: GraphQLNonNull(GraphQLString) },
  },
  resolve: async (parent, args, context, info) => {
    return User.create(args);
  },
};

module.exports = {
  createUser,
};
