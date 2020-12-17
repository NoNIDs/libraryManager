const { Router } = require("express");

const bcrypt = require("bcryptjs");
const config = require("config");

const jwt = require("jsonwebtoken");
const { check, validationResult } = require("express-validator");

const User = require("../models/User");
const router = Router();

//Login API - api/auth/login

router.post(
   "/login",
   [
      check("username", "Enter correct username").exists(),
      check("password", "Enter password").exists(),
   ],
   async (req, res) => {
      try {
         const errors = validationResult(req);

         if (!errors.isEmpty()) {
            return res.status(400).json({
               message: "Uncorrect credentials for authorization",
               errors: errors.array(), // to array
            });
         }

         const { username, password } = req.body;

         const user = await User.findOne({ username }); //find fist user

         if (!user) {
            return res.status(400).json({ message: "User don't exist" });
         }

         const isMatch = await bcrypt.compare(password, user.password);

         if (!isMatch) {
            return res
               .status(400)
               .json({ message: "Incorrect password. Please try again" });
         }

         const token = jwt.sign(
            { userId: user._id },
            config.get("jwtSecret"),
            { expiresIn: "1h" } // the token will exist for 1 hour
         );

         res.json({ username: user.username, token });
      } catch (error) {
         res.status(500).json({
            message: "Something went wrong. Please try again",
         });
      }
   }
);

module.exports = router;
