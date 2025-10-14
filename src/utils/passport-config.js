import passport from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import { User } from "../models/user.models.js";
import crypto from "crypto";
import { generateAccesAndRefreshTokens } from "./jwt.js";


passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: process.env.GOOGLE_CALLBACK_URL
},
    async (accessToken, refreshToken, profile, done) => {
        console.log("Google Profile:", profile);
        try {
            let user = await User.findOne({ googleId: profile.id });
            if (!user) {
                user = await User.create({
                    googleId: profile.id,
                    username: profile.displayName,
                    email: profile.emails[0].value,
                    isEmailVerified: true,
                    password: crypto.randomBytes(20).toString("hex"),
                });
            }
            return done(null, user);
        } catch (err) {
            return done(err, null);
        }
    }
));

export default passport