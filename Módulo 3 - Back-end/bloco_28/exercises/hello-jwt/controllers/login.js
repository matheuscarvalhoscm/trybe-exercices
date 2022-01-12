const loginService = require('../services/login');

const login = async (req, res) => {
  try {
    const { username, password } = req.body;

    const token = await loginService(username, password);

    return res.status(201).json(token);
  } catch (error) {
    console.log(error);
    return res.status(401).json({ message: error.message });
  }
};

module.exports = login;
