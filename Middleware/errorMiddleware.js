const errorMiddleware = (req, res, next) => {
  res.status(404).json({ err: { message: "Resource not found" } });
};

module.exports = { errorMiddleware };
