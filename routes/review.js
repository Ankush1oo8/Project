const express = require("express");
const router = express.Router({ mergeParams: true });
const wrapAsync = require("../utils/wrapAsync.js");
const ExpressError = require("../utils/ExpressError.js");
const Listing = require("../models/listing.js");
const Review = require("../models/review.js");
const { listingSchema } = require("../schema.js");
const reviewController=require("../controllers/review.js");
const {
  validateReview,
  isLoggedIn,
  isReviewOwner,
} = require("../middleware.js");

//post Reviews route
router.post(
  "/",
  isLoggedIn,
  validateReview,
  wrapAsync(reviewController.create)
);

//delete Reviews route
router.delete(
  "/:reviewId",
  isLoggedIn,
  isReviewOwner,
  wrapAsync(reviewController.delete)
);

module.exports = router;
