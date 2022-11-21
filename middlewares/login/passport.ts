import passport from "passport";
import {loginStrategy, signupStrategy } from "./strategies";
import { Strategy as LocalStrategy } from "passport-local";
import { userDao  } from '../../src/daos/index';
import { Document, Types } from "mongoose";

declare global {
    namespace Express {
        interface User {
            username: string;
            _id?: any;
        }
    }
}

passport.use('login', new LocalStrategy(loginStrategy));
passport.use('signup', new LocalStrategy(
    {passReqToCallback: true},
    signupStrategy)
)

passport.serializeUser((user:any, done:any) => {

    done(null, user._id);
});


passport.deserializeUser(async (id:any, done:any) => {
    id = new Types.ObjectId(id);
    const user = await userDao.findById(id);
    done(null, user);
});


const passportSignup = passport.authenticate('signup',
    {failureRedirect: '/signup'});

const passportLogin = passport.authenticate('login',
    {failureRedirect: '/login'});

export { passportSignup, passportLogin, passport  }

