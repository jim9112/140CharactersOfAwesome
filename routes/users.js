const express = require('express');

const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const { check, validationResult } = require('express-validator');

const User = require('../models/User');


// @route Post api/users
// register new user
// Public

router.post('/', [
  check('firstName', 'Please enter your first name').not().isEmpty(),
  check('lastName', 'Please enter your last name').not().isEmpty(),
  check('userName', 'Please enter a username').not().isEmpty(),
  check('email', 'Please include a valid email').isEmail(),
  check('password', 'Please enter a password with at least 6 charactors').isLength({ min: 6 }),
], async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const {
    firstName,
    lastName,
    userName,
    email,
    password,
  } = req.body;

  try {
    let user = await User.findOne({ email });

    if (user) {
      return res.status(400).json({ msg: 'User already exsists' });
    }

    user = await User.findOne({ userName });

    if (user) {
      return res.status(400).json({ msg: 'User already exsists' });
    }

    user = new User({
      firstName,
      lastName,
      userName,
      email,
      password,
    });

    const salt = await bcrypt.genSalt(10);

    user.password = await bcrypt.hash(password, salt);

    await user.save();

    const payload = {
      user: {
        id: user.id,
      },
    };
    jwt.sign(payload, config.get('jwtSecret'), {
      expiresIn: 3600,
    }, (err, token) => {
      if (err) throw err;
      res.json({ token });
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
