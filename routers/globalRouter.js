import express from "express";
import {
  getJoin,
  postJoin,
  login,
  logout,
} from "../controllers/userController";
import { home, search } from "../controllers/videoController";
import routes from "../routes";

const globalRouter = express.Router();

globalRouter.get(routes.home, home);
globalRouter.post(routes.join, getJoin);
globalRouter.get(routes.join, postJoin);
globalRouter.get(routes.login, login);
globalRouter.get(routes.logout, logout);
globalRouter.get(routes.search, search);

export default globalRouter;
