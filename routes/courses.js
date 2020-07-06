const express = require('express');
const { getCourses } = require('../controllers/courses');

const router = express.Router({ mergeParams: true }); // merge params need for rerouting

router.route('/').get(getCourses);

module.exports = router;
