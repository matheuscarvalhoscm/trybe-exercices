const Joi = require("joi");
const { generateToke } = require('../services/authService');

const loginSchema = Joi.object({
  username: Joi.string().min(5),
  password: Joi.string().min(5),
});

const loginService = async (username, password) => {
  const { error } = loginSchema.validate({ username, password });

  if (error) {
    throw error
  }

  const payload = {
    username,
    admin: false,
  };
  
  const token = generateToke(payload);
  
  return { message: 'Token generated :D', token }
};

module.exports = loginService;
