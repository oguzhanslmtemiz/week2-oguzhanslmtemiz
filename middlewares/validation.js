const httpStatus = require("http-status");
const Joi = require("joi");

const loginSchema = Joi.object({
  username: Joi.string().alphanum().required().min(3),
  password: Joi.string().required().min(8),
});

const registerSchema = Joi.object({
  name: Joi.string().required(),
  surname: Joi.string(),
  username: Joi.string().alphanum().required().min(3),
  password: Joi.string().required().min(8),
});

module.exports.validate = (schema) => (req, res, next) => {
  if (schema === "login") schema = loginSchema;
  if (schema === "register") schema = registerSchema;

  const { value, error } = schema.validate(req.body);
  if (error) {
    const errorMessage = error.details
      ?.map((detail) => detail.message)
      .join(", ");
    res.status(httpStatus.BAD_REQUEST).json({ error: errorMessage });
    return;
  }

  Object.assign(req, value);
  return next();
};
