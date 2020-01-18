const express = require('express');
const router = express.Router();

router.get('/', (req, res) => res.send('Response of an API is questionable...'))

// export of the file
module.exports = router;