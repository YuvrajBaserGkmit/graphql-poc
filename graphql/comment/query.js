const { GraphQLID, GraphQLList } = require("graphql");
const { Comment } = require("./../../models");
const CommentType = require("./typeDef");

// Get comment by id
const getComment = {
  type: CommentType,
  args: {
    id: { type: GraphQLID },
  },
  resolve: async (parent, args) => {
    return Comment.findByPk(args.id);
  },
};

// Get all comments
const getAllComments = {
  type: GraphQLList(CommentType),
  resolve: async (parent, args) => {
    return Comment.findAll();
  },
};

module.exports = {
  getComment,
  getAllComments,
};
