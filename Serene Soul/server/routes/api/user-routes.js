const router = require('express').Router();
const {
  createUser,
  getSingleUser,
  addQuote,
  removeQuote,
  login,
} = require('../../controllers/user-controller');

// import middleware
const { authMiddleware } = require('../../utils/auth');

// put authMiddleware anywhere we need to send a token for verification of user
router.route('/').post(createUser).put(authMiddleware, addQuote);

router.route('/login').post(login);

router.route('/user').get(authMiddleware, getSingleUser);

router.route('/quotes/:quoteId').delete(authMiddleware, removeQuote);

module.exports = router;