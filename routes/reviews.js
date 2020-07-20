const express = require('express');

const Review = require('../models/Review');
const {
  getReviews,
  getReview,
  addReview,
  updateReview,
  deleteReview,
} = require('../controllers/reviews');

const { protect, authorize } = require('../middlewares/auth');
const advancedResults = require('../middlewares/advancedResults');

const router = express.Router({ mergeParams: true }); // merge params need for rerouting

router
  .route('/')
  .get(
    advancedResults(Review, {
      path: 'bootcamp',
      select: 'name description',
    }),
    getReviews
  )
  .post(protect, authorize('users', 'admin'), addReview);

router
  .route('/:id')
  .get(getReview)
  .put(protect, authorize('users', 'admin'), updateReview)
  .delete(protect, authorize('users', 'admin'), deleteReview);

module.exports = router;
