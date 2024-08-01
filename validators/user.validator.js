const Joi = require("joi");
const { validateRequest } = require("../helpers/validate.helper");

const createUserSchema = (req, res, next) => {
  const schema = Joi.object({
    name: Joi.string().min(3).max(30).required().label("Name"),
    email: Joi.string().email().lowercase().trim().required().label("Email"),
  });
  validateRequest(req, res, next, schema, "body");
};

module.exports = {
  createUserSchema,
};
