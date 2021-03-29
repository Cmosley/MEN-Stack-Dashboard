const Store = require("../models/store");

module.exports = {
    show
    
}

function show(req, res) {
    Store.findById(req.params.id,)
    .then((stores) => {
      res.render('stores/show', {
          title: 'Store Details',   
          stores, 
          user: req.user
          })
      })
  }