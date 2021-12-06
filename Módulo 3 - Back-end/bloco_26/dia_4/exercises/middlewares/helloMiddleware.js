const helloMiddleware = (req, res, next) => {
  const { name } = req.body;

  return res.status(200).json({ message: `Hello, ${name}` });
};

module.exports = helloMiddleware;
