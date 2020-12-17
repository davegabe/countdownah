var express = require("express");
var router = express.Router();

var db = require("../db");

/* GET countdown page. */
router.use("/:id", async function (req, res, next) {
  try {
    id = req.params.id;
    c = await db.findCountdown(id);
    res.render("countdown", {
      title: c.title,
      description: c.description,
      date: c.date,
    });
  } catch (e) {
    next(createError(404));
  }
});

module.exports = router;
