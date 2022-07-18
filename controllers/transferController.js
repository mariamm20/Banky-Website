const Customers = require("../models/customersSchema");

const transfer_transfer_get = (req, res) => {
    Customers.find()
      .then((result) => {
        res.render("transfer.ejs", {
          pageTitle: "Transfer Money",
          style: "transfer.css",
          customers: result,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  module.exports = {transfer_transfer_get};