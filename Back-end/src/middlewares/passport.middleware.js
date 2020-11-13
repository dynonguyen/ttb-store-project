const passport = require('passport');
const GooglePlusTokenStrategy = require('passport-google-token').Strategy;
const AccountModel = require('../models/account.models/account.model');
const UserModel = require('../models/account.models/user.model');

// ! xác thực với google plus
passport.use(
  new GooglePlusTokenStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        const { id, name } = profile;
        const { familyName, givenName } = name;
        const email = profile.emails[0].value;
        // kiểm tra email đã tồn tại hay chưa
        const localUser = await AccountModel.findOne({
          email,
          authType: 'local',
        });
        if (localUser) return done(null, localUser);

        const user = await AccountModel.findOne({
          googleId: id,
          authType: 'google',
        });
        if (user) return done(null, user);

        // tạo account và user tương ứng
        const newAccount = await AccountModel.create({
          authType: 'google',
          googleId: id,
          email,
        });

        await UserModel.create({
          accountId: newAccount._id,
          email,
          fullName: familyName + ' ' + givenName,
        });

        done(null, newAccount);
      } catch (error) {
        done(error, false);
      }
    },
  ),
);
