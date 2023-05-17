


const router = require('express').Router();
const {
  getSingleThought,
  getThought,
  createThought,
  deleteThought,
  createReaction,
  deleteReaction,
  updateThought

} = require('../../controllers/thoughtController');

router.route('/').get(getThought).post(createThought);

router.route('/:thoughtId').get(getSingleThought).put(updateThought).delete(deleteThought);

router.route('/:thoughtId/reactions').post(createReaction).delete(deleteReaction); 

module.exports = router;
