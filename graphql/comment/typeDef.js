const {
  GraphQLID,
  GraphQLObjectType,
  GraphQLString,
  GraphQLList,
} = require("graphql");

const CommentType = new GraphQLObjectType({
  name: "Comment",
  fields: () => ({
    id: { type: GraphQLID },
    content: { type: GraphQLString },
    post_id: { type: GraphQLID },
    created_at: { type: GraphQLString },
    updated_at: { type: GraphQLString },
  }),
});

module.exports = CommentType;
