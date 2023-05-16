const express = require("express");
const dotenv = require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

// Body Parser
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Route
app.use("/api/users", require("./Routes/userRoute"));

app.listen(PORT, () => {
  console.log(`server running at port: ${PORT}`);
});
