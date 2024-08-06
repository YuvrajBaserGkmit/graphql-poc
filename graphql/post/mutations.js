const { Post } = require("../../models");
const PostType = require("./typeDef");
const { GraphQLString, GraphQLNonNull, GraphQLID } = require("graphql");

// Create a new post
const createPost = {
  type: PostType,
  args: {
    title: { type: GraphQLNonNull(GraphQLString) },
    description: { type: GraphQLNonNull(GraphQLString) },
    user_id: { type: GraphQLNonNull(GraphQLID) },
  },
  resolve: async (parent, args, context, info) => {
    return Post.create(args);
  },
};

// Update a post by ID
const updatePostById = {
  type: GraphQLString,
  args: {
    id: { type: GraphQLNonNull(GraphQLString) },
    title: { type: GraphQLString },
    description: { type: GraphQLString },
  },
  resolve: async (parent, args, context, info) => {
    const post = await Post.findByPk(args.id);
    if (!post) {
      throw new Error("Post not found");
    }
    await post.update(args, {
      where: {
        id: args.id,
      },
    });
    return "post updated successfully";
  },
};

// Delete a post by ID
const deletePostById = {
  type: GraphQLString,
  args: {
    id: { type: GraphQLNonNull(GraphQLString) },
  },
  resolve: async (parent, args, context, info) => {
    const post = await Post.findByPk(args.id);
    if (!post) {
      throw new Error("Post not found");
    }
    await post.destroy({
      where: {
        id: args.id,
      },
    });
    return "post deleted successfully";
  },
};

module.exports = {
  createPost,
  updatePostById,
  deletePostById,
};
