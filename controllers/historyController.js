const History = require("../models/historySchema");

const history_history_get = (req, res) => {
  
    History.find()
      .then((result) => {
        res.render("history.ejs", { pageTitle: "Transfer History", style: "history.css", history : result});
      })
      .catch((err) => {
        console.log(err);
      });
    
  }

  module.exports ={ history_history_get};