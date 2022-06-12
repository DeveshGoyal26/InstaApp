const { Router } = require("express");
const User = require("../models/User");

const authRouter = Router();

authRouter.post("/signup", (req, res) => {
  const user = new User(req.body);
  user.save((err, success) => {
    if (err) {
      return res.status(500).send({ message: "Error Occured" });
    }
    return res
      .status(201)
      .send({ message: "Signup Success", token: 12345, user: success["_doc"] });
  });
});

authRouter.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const validUser = await User.find({ username, password });
  if (validUser.length > 0) {
    return res.status(200).send(validUser);
  }
  return res.status(404).send({ message: "User not found" });
});

module.exports = authRouter;
