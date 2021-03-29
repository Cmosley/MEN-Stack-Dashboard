const router = require("express").Router();
const storesCtrl = require('../controllers/stores.js')



router.get('/', isLoggedIn, storesCtrl.show)


function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) return next();
    res.redirect("/auth/google");
  }

module.exports = router; 