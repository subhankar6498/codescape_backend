// core module
const path = require("path");

// 3rd-party module
const express = require("express");
const dotEnv = require("dotenv");
const cors = require("cors");

// load .env file in node application
dotEnv.config();

// Creating express application
const app = express();

// Connect mongodb database
const connectDB = require("./app/config/db");
connectDB();

// Middleware to parse JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Connect Frontend
app.use(cors());

// Serving public folder statically
app.use(express.static(path.join(__dirname, "public")));

/************************Connect Routes******************** */
// Connect API Folder route
const contactRouter = require("./app/routes/api/contact.routes");
app.use("/api", contactRouter);

/************************Connect Routes******************** */

// Define port no. and set-up server
const port = process.env.PORT || 5000;
app.listen(port, (err) => {
  if (err) throw err;
  console.log(`Server is connected at http://localhost:${port}`);
});
