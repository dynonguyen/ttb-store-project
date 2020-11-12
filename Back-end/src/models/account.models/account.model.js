const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcryptjs');

const accountSchema = new Schema({
  email: {
    type: String,
    unique: true,
    required: true,
    trim: true,
    lowercase: true,
  },
  password: {
    type: String,
    default: null,
  },
  googleId: {
    type: String,
    default: null,
  },
  authType: {
    type: String,
    enum: ['local', 'google'],
    default: 'local',
  },
  failedLoginTimes: {
    type: Number,
    default: 0,
  },
  refreshToken: {
    type: String,
    default: null,
  },
});

// hash password with bcrypt
// Note: callback should be a normal function -> use 'this'
accountSchema.pre('save', async function (next) {
  try {
    if (this.authType === 'local') {
      const saltRounds = parseInt(process.env.SALT_ROUND);
      //hashing password...
      const hashPassword = await bcrypt.hash(this.password, saltRounds);
      this.password = hashPassword;
      next();
    }
    next();
  } catch (error) {
    next(error);
  }
});

const AccountModel = mongoose.model('account', accountSchema, 'accounts');

module.exports = AccountModel;
