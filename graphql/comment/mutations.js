const { Comment } = require("../../models");
const CommentType = require("./typeDef");
const { GraphQLString, GraphQLNonNull, GraphQLID } = require("graphql");

// Create a new comment
const createComment = {
  type: CommentType,
  args: {
    content: { type: GraphQLNonNull(GraphQLString) },
    post_id: { type: GraphQLNonNull(GraphQLID) },
  },
  resolve: async (parent, args, context, info) => {
    return Comment.create(args);
  },
};

// Update a comment by ID
const updateCommentById = {
  type: GraphQLString,
  args: {
    id: { type: GraphQLNonNull(GraphQLID) },
    content: { type: GraphQLString },
  },
  resolve: async (parent, args, context, info) => {
    const comment = await Comment.findByPk(args.id);
    if (!comment) {
      throw new Error("Comment not found");
    }
    await Comment.update(args, {
      where: {
        id: args.id,
      },
    });
    return "comment updated successfully";
  },
};

// Delete a comment by ID
const deleteCommentById = {
  type: GraphQLString,
  args: {
    id: { type: GraphQLNonNull(GraphQLID) },
  },
  resolve: async (parent, args, context, info) => {
    const comment = await Comment.findByPk(args.id);
    if (!comment) {
      throw new Error("Comment not found");
    }
    await comment.destroy({
      where: {
        id: args.id,
      },
    });
    return "comment deleted successfully";
  },
};

module.exports = {
  createComment,
  updateCommentById,
  deleteCommentById,
};
