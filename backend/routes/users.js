const router = require("express").Router(); // use express router for this one
let User = require("../models/user.model"); // assign temporary variables

// login
router.route("/login").get((req, res) => {
  console.log(req);
  User.findOne({ email: `${req.query.email}` })
    .then((users) => {
      if (users.password != req.query.password) {
        res.status(400).json("Incorrect password");
      } else {
        res.status(200).json(users); // send right response
      }
    })
    .catch((error) => res.status(400).json("Error! " + error));
});

// register
router.route("/register").post((req, res) => {
  console.log(req.body);

  const name = req.body.name;
  const email = req.body.email;
  const password = req.body.password;

  const newUser = new User({ name, email, password });
  // register user
  newUser
    .save()
    .then(() => res.status(200).json("Successfully registered"))
    .catch((err) => res.status(400).json("Error in registration." + err));
});
// end of sign-up endpoints

module.exports = router;
