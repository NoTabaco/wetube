import express from "express";
import routes from "../routes";
import {
  userDetail,
  getEditProfile,
  postEditProfile,
  postChangePassword,
  getChangePassword,
} from "../controllers/userController";
import { onlyPrivate, uploadAvatar } from "../middlewares";

const userRouter = express.Router();

userRouter.get(routes.editProfile, onlyPrivate, getEditProfile);
userRouter.post(routes.editProfile, onlyPrivate, uploadAvatar, postEditProfile);

userRouter.post(routes.changePassword, onlyPrivate, postChangePassword);
userRouter.get(routes.changePassword, onlyPrivate, getChangePassword);

userRouter.get(routes.userDetail(), userDetail);

export default userRouter;
