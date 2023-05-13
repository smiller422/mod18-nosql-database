const { Thought,User } = require('../models');

module.exports = {
  async getThought(req, res) {
    try {
      const thought = await Thought.find()
        .populate({ thought: 'reactions', select: '-__v' });

      res.json(thought);
    } catch (err) {
      console.error({ message: err });
      res.status(500).json(err);
    }
  },
  async getSingleThought(req, res) {
    try {
      const thought = await Thought.findOne({ _id: req.params.thoughtId })
        .populate({ thought: 'tags', select: '-__v' });

      if (!thought) {
        return res.status(404).json({ message: 'No thought with that ID' });
      }

      res.json(thought);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  // create a new thought
  async createThought(req, res) {
    try {
      const thought = await Thought.create(req.body);
      const user = await User.findOneAndUpdate(
        { _id: req.body.userId },
        { $push: { thoughts: thought._id } },
        { new: true }
      );
      console.log(user)
      res.json(thought);
    } catch (err) {
      console.log(err)
      res.status(500).json(err);
    }
  },
};


