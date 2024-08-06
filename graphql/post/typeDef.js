const {
  GraphQLID,
  GraphQLObjectType,
  GraphQLString,
  GraphQLList,
} = require("graphql");
const CommentType = require("../comment/typeDef");

const PostType = new GraphQLObjectType({
  name: "Post",
  fields: () => ({
    id: { type: GraphQLID },
    title: { type: GraphQLString },
    description: { type: GraphQLString },
    user_id: { type: GraphQLID },
    created_at: { type: GraphQLString },
    updated_at: { type: GraphQLString },
    comments: { type: GraphQLList(CommentType) },
  }),
});

module.exports = PostType;
