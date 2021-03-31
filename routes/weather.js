const router = require("express").Router();
const weatherCtrl = require("../controllers/weather");

router.get('/', weatherCtrl.current)

module.exports = router;
