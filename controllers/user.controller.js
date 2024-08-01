const { commonErrorHandler } = require("../helpers/common-function.helper");
const userService = require("../services/user.service");

const getAllUsers = async (req, res, next) => {
  try {
    const { query: payload } = req;
    const response = await userService.getAllUsers(payload);
    res.data = response;
    next();
  } catch (error) {
    let message = error.errors ? error.errors[0].message : error.message;
    commonErrorHandler(req, res, message, error.statusCode, error);
  }
};

module.exports = {
  getAllUsers,
};
