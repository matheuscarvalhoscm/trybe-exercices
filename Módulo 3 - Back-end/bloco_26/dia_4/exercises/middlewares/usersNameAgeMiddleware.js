const usersNameAgeMiddleWare = (req, res, next) => {
  const { name, age } = req.params;

  return res.status(200).json({ message: `Seu nome é ${name} e você tem ${age} anos de idade` })
};

module.exports = usersNameAgeMiddleWare;
