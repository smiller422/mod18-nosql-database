// const router = require('express').Router();
// // const videoRoutes = require('./videoRoutes');
// const userRoutes = require('./userRoutes');

// // router.use('/videos', videoRoutes);
// router.use('/users', userRoutes);

// module.exports = router;



const router = require('express').Router();
const apiRoutes = require('./api');

router.use('/api', apiRoutes);

router.use((req, res) => {
  return res.send('Wrong route!');
});

module.exports = router;
