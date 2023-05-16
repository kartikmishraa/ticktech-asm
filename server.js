const express = require("express");
const errorHandler = require("./middlewares/errorHandler");
const { errorMiddleware } = require("./middlewares/errorMiddleware");
const dotenv = require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

// Body Parser
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Route
app.use("/api/users", require("./Routes/userRoute"));

// Error Handler and Middleware
app.use(errorHandler);
app.use(errorMiddleware);

app.listen(PORT, () => {
  console.log(`server running at port: ${PORT}`);
});
