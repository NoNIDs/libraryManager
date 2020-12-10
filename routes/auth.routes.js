const { Router } = require("express");
const router = Router();

const passport = require("passport");

//Login API - api/auth/login
router.post(
   "/login",
   passport.authenticate("local", {
      successRedirect: "/dashboard",
      failureRedirect: "/login",
   })
);

module.exports = router;
