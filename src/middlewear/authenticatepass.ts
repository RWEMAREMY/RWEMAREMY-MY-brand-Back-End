import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import _ from "lodash";
import { Strategy as JwtStrategy, ExtractJwt, VerifiedCallback } from 'passport-jwt';
import { Response, Request, NextFunction } from "express";
import  User,{ userInterface } from "../models/user";
import passport from 'passport';

dotenv.config();
const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.JWT_SECRET || "secret",
};
passport.use(
  new JwtStrategy(jwtOptions, async (payload, done) => {
    try {
      const user = await User.findById(payload.userId);
      if (!user) {
        return done(null, false);
      }
      return done(null, user);
    } catch (error) {
      return done(error, false);
    }
  })
);

export const isAuthenticated = (req: Request, res: Response, next: NextFunction) => {
  passport.authenticate('jwt', { session: false }, (err: any, user: userInterface, info: any) => {
    if (err) {
      return res.status(400).send({ data: [], message: "error", error: err.message });
    }
    if (!user) {
      return res.status(400).send({ data: [], message: "Not authorized!!", error: null });
    }
    req.user = user;
    next();
  })(req, res, next);
};

export const isAdmin = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (!req.user) {
    return res.send("not authorized ...");
  }

  if (!("role" in req.user)) {
    return res.send("not authorized ...");
  }

  if (req.user.role === "admin") {
    next();
  } else {
    return res.send("unauthorized user ...");
  }
};