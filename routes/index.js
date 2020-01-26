const express = require('express');
const router = express.Router();
const wunderlistRouter = require('./wunderlist');

router.get('/', (req, res) => res.send('Response of an API is questionable...'))
router.use('/wunderlist', wunderlistRouter)

// export of the file
module.exports = router;