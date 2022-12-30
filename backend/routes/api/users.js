const express = require('express');

const { setTokenCookie, restoreUser } = require('../../utils/auth');
const { Spot, User, Review, Booking, SpotImage, ReviewImage } = require('../../db/models');

const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');

const router = express.Router();

const validateSignup = [
	check('email')
		.exists({ checkFalsy: true })
		.isEmail()
		.withMessage('Please provide a valid email.'),
	check('username')
		.exists({ checkFalsy: true })
		.isLength({ min: 4 })
		.withMessage('Please provide a username with at least 4 characters.'),
	check('username')
		.not()
		.isEmail()
		.withMessage('Username cannot be an email.'),
	check('password')
		.exists({ checkFalsy: true })
		.isLength({ min: 6 })
		.withMessage('Password must be 6 characters or more.'),
	handleValidationErrors,
];

// Sign up
router.post('/', async (req, res) => {
	const { email, password, username, firstName, lastName } = req.body;
	const user = await User.signup({
		email,
		username,
		password,
		firstName,
		lastName,
	});

	await setTokenCookie(res, user);

	return res.json({
		user: user,
	});
});

// Find all users
router.get('/', async (req, res) => {
	const allUsers = await User.findAll();
	res.json(allUsers);
});

module.exports = router;
