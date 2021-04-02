const router = require("express").Router();
const storesCtrl = require('../controllers/stores.js')


//store 
router.get('/dashboard', isLoggedIn,  storesCtrl.index,)
router.get('/', isLoggedIn, storesCtrl.show)
router.post('/', isLoggedIn, storesCtrl.create)
// daily sales 
router.get('/submit', isLoggedIn, storesCtrl.submitForm)
router.post('/submit', isLoggedIn, storesCtrl.submitSales)



function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) return next();
    res.redirect("/auth/google");
  }

module.exports = router; 