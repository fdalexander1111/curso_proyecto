import bcrypt from "bcrypt";
import { userDao  } from '../../src/daos/index';
import { Document, Types } from "mongoose";


export const signupStrategy = async (username:string, password:string, done:any) => {

    const user = await userDao.getByname('email', username);
    const passwordHassBD = user.password;
    const passwordHass = bcrypt.compareSync(password, passwordHassBD)

    if (!user || !passwordHass) {
        return done(null, null, { message: "Invalid username or password" });
    }

    return done(null, user);
    
}

export const loginStrategy = async (req:any, username:string, password:string, done:any) => {

    const user = req.body;
    const passwordHash = bcrypt.hashSync(password, 10);
    user.password = passwordHash;
    const userSave = await userDao.save(user);

    return done(null, user);

}


