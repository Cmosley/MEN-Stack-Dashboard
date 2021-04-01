const router = require("express").Router();
const usersCtrl = require("../controllers/users");

router.get("/", isLoggedIn, usersCtrl.index);
router.get('/:id', isLoggedIn, usersCtrl.showProfile);
router.put('/profile', isLoggedIn, usersCtrl.update)
router.post('/profile', isLoggedIn, usersCtrl.addToUser)


function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) return next();
  res.redirect("/auth/google");
}


module.exports = router;
