// const {User} = require('../models');
const { User } = require('../models')

module.exports = {
  async getUsers(req, res) {
    try {
      const users = await User.find();
      res.json(users);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  async getSingleUser(req, res) {
    try {
      const user = await User.findOne({ _id: req.params.userId })

        .select('-__v');

      if (!user) {
        return res.status(404).json({ message: 'No user with that ID' });
      }
      console.log(user)

      res.json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  // create a new user
  async createUser(req, res) {

    try {
      console.log(req.body)
      const dbUserData = await User.create(req.body);
      res.json(dbUserData);
      // res.send('hit the route')
    } catch (err) {
      console.log(err)
      res.status(500).send("user already exists");
    }
  },
};

