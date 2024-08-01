const { User } = require("../models");

const getAllUsers = async (payload) => {
  const { page, limit } = payload;

  const offset = (page - 1) * limit;

  const users = await User.findAndCountAll({
    offset: offset,
    limit: limit,
    attributes: {
      exclude: ["created_at", "updated_at", "deleted_at"],
    },
  });
  if (!users.rows.length) {
    const error = new Error("No content available");
    error.statusCode = 204;
    throw error;
  }
  return users;
};

module.exports = {
  getAllUsers,
};
