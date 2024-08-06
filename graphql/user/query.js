const {
  GraphQLID,
  GraphQLList,
  GraphQLInt,
  GraphQLObjectType,
} = require("graphql");
const { User, Post, Comment } = require("./../../models");
const UserType = require("./typeDef");

// Get user by id
const getUser = {
  type: UserType,
  args: {
    id: {
      type: GraphQLID,
    },
  },
  resolve: async (parent, args) => {
    const user = await User.findByPk(args.id, {
      include: [
        {
          model: Post,
          as: "posts",
        },
      ],
    });
    return user;
  },
};

// Get all users
const getAllUsers = {
  type: GraphQLList(UserType),
  resolve: async (parent, args) => {
    const users = await User.findAll({
      include: [
        {
          model: Post,
          as: "posts",
          include: [
            {
              model: Comment,
              as: "comments",
            },
          ],
        },
      ],
    });

    return users;
  },
};

module.exports = {
  getUser,
  getAllUsers,
};
