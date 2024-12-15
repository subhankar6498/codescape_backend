// import repositories
const contactRepositories = require("../modules/contact/repositories/contact.repositories");

// import others

// Define Controller
class ContactController {
  async createCustomer(req, res) {
    try {
      // 1.Grab the data from the request body
      const { name, email, mobile, lastQualification, message } = req.body;

      // 3.save customre data into another variable
      const customerData = { name, email, mobile, lastQualification, message };

      // 4.Save customer in the database
      const savedContactData = await contactRepositories.createContact(
        customerData
      );

      // Return the response
      if (savedContactData) {
        res.status(201).json({
          status: 200,
          message: "Your Message is sent Successfully",
          data: savedContactData,
        });
      }
    } catch (error) {
      return res.status(500).json({
        status: 500,
        message: "Data successfully saved",
      });
    }
  }
}

module.exports = new ContactController();
