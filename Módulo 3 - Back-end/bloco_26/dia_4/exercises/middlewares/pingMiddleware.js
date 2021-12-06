const pingMiddleware = (req, res, next) => {
  return res.status(200).send({ message: "pong" });
};

module.exports = pingMiddleware;
