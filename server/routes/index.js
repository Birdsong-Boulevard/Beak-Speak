var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});
router.get("/1", function (req, res, next) {
  res.render("index", { title: "1" });
});
router.get("/2", function (req, res, next) {
  res.render("index", { title: "2" });
});
router.get("/3", function (req, res, next) {
  res.render("index", { title: "3" });
});
router.get("/4", function (req, res, next) {
  res.render("index", { title: "4" });
});

module.exports = router;
