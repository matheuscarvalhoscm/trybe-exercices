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

  const checkAdmin = (username, password) => {
    if (username !== 'admin' && password !== 's3nh4S3gur4???') return false;
    
    return true;
  };

  const payload = {
    username,
    admin: checkAdmin(username, password),
  };
  
  const token = generateToke(payload);
  
  return { message: 'Token generated :D', token }
};

module.exports = loginService;
