const express = require("express");
const cors = require("cors");
const authRoute = require("./route/authRoute");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", authRoute);

app.listen(3001, console.log("Server running"));