


const router = require('express').Router();
const {
  getSingleThought,
  getThought,
  createThought,
} = require('../../controllers/thoughtController');

router.route('/').get(getThought).post(createThought);

router.route('/:thoughtId').get(getSingleThought);

// router.route('/:thoughtId/reactions').post(addReaction);  //import this in on aboput line 9

module.exports = router;
