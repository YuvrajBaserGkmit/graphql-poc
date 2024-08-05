const {
  GraphQLID,
  GraphQLObjectType,
  GraphQLString,
  GraphQLList,
} = require("graphql");
const PostType = require("../post/typeDef");

const UserType = new GraphQLObjectType({
  name: "User",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    email: { type: GraphQLString },
    posts: { type: GraphQLList(PostType) },
    created_at: { type: GraphQLString },
    updated_at: { type: GraphQLString },
  }),
});

module.exports = UserType;
