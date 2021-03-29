const Store = require("../models/store");

module.exports = {
    show, 
    create,
    daily
}

function daily(req, res) {
    Store.findById(req.params.id)
    .then((store) => {
      res.redirect('/')
    })
  }

function create(req, res) {
    Store.create(req.body)
    .then(() => {
      res.redirect('/stores')
    })
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