const { GraphQLID, GraphQLList } = require("graphql");
const { Post } = require("./../../models");
const PostType = require("./typeDef");

// Get post by id
const getPost = {
  type: PostType,
  args: {
    id: { type: GraphQLID },
  },
  resolve: async (parent, args) => {
    return Post.findByPk(args.id);
  },
};

// Get all posts
const getAllPosts = {
  type: GraphQLList(PostType),
  resolve: async (parent, args) => {
    const posts = await Post.findAll();
    return posts;
  },
};

module.exports = {
  getPost,
  getAllPosts,
};
