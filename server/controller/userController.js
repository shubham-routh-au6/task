import User from "../model/User.js";

const controller = {};

controller.GetUser = (req, res) => {
    User.find()
    .then((data) => {
      res.status(200).json({ data: data });
    })
    .catch((e) => console.log(e.message));
};

controller.GetFirstUser = (req, res) => {
  User.findOne()
  .then((data) => {
    res.status(200).json({ data: data });
  })
  .catch((e) => console.log(e.message));
};

export default controller;