// import model
const ContactModel = require("../model/contact.model");

class ContactRepositories {
  // Define createContact repo method
  async createContact(customerData) {
    try {
      const result = await ContactModel.create(customerData);
      return result;
    } catch (error) {
      return error;
    }
  }
}

module.exports = new ContactRepositories();
