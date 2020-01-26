const express = require('express');
const router = express.Router();
const { getList } = require('../controllers/wunderlist');

router.get('/', (req, res) => res.send('wunderlist is being hit'))
router.get('/list', getList)

// export of the file
module.exports = router;