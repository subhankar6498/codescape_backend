// 3rd party module
const express = require("express");
const contactRouter = express.Router();

// Import controller
const ContactController = require("../../webservices/contact.controller");

// import other

// Define routes
contactRouter.post("/create-customer", ContactController.createCustomer);

module.exports = contactRouter;
