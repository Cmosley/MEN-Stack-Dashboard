const router = require("express").Router();


router.get("/", isLoggedIn, function (req, res) {
  res.render("index", { title: "Home Page", user: req.user ? req.user : null, });
});

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) return next();
  res.redirect("/auth/google");
}

module.exports = router;