const {
  GraphQLID,
  GraphQLList,
  GraphQLInt,
  GraphQLString,
  GraphQLEnumType,
} = require("graphql");
const { Post } = require("./../../models");
const PostType = require("./typeDef");
const { Op } = require("sequelize");
// Get post by id
const getPost = {
  type: PostType,
  args: {
    id: { type: GraphQLID },
  },
  resolve: async (parent, args) => {
    return Post.findByPk(args.id, { include: "comments" });
  },
};

const OrderEnumType = new GraphQLEnumType({
  name: "OrderEnum",
  values: {
    ASC: {
      value: "asc",
    },
    DESC: {
      value: "desc",
    },
  },
});

// Get all posts
const getAllPosts = {
  type: GraphQLList(PostType),
  args: {
    limit: { type: GraphQLInt },
    page: { type: GraphQLInt },
    search: { type: GraphQLString },
    sort: { type: GraphQLString },
    order: { type: OrderEnumType },
  },
  resolve: async (parent, args) => {
    const { search, sort, page, order } = args;
    let { limit } = args;
    let offset = (+page - 1) * limit;

    if (offset < 0) {
      offset = null;
      limit = null;
    }

    const whereClause = search ? { title: { [Op.like]: `%${search}%` } } : {};
    const orderValue = order || "DESC";
    const sortField = sort || "created_at";
    const orderClause = [[sortField, orderValue]];

    const posts = await Post.findAll({
      where: whereClause,
      include: "comments",
      order: orderClause,
      limit: limit,
      offset,
    });

    return posts;
  },
};

module.exports = {
  getPost,
  getAllPosts,
};
