const { Router } = require("express");

const userValidator = require("../validators/user.validator");
const commonValidator = require("../validators/common.validator");
const userController = require("../controllers/user.controller");
const genericResponse = require("../helpers/common-function.helper");

const router = Router();

router.get(
  "/",
  commonValidator.limitPageSchema,
  userController.getAllUsers,
  genericResponse.sendResponse
);

module.exports = router;
