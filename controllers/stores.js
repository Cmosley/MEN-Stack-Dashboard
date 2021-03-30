const Store = require("../models/store");

module.exports = {
    index, 
    show, 
    create,
    submitSales,
    submitForm,
}

function submitForm(req, res) {
    Store.findById(req.params.id,)
    .then((stores) => {
      res.render('stores/submit', {
          title: 'Submit Daily Sales',   
          stores, 
          user: req.user
          })
      })
  }

function submitSales(req, res) {
    Store.findById(req.params.id)
    .then((store) => {
    store.dailysales.push(req.body)
    store.save()
        .then(() => {
      res.redirect('/')
      });
    });
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


function index(req, res) {
  res.render('stores/dashboard', {title: "Dashboard", user: req.user})
}