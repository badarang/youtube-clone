import "core-js";
import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import { localsMiddleware } from "./middlewares";
import routes from "./routes";
import userRouter from "./routers/userRouter";
import globalRouter from "./routers/globalRouter";
import videoRouter from "./routers/videoRouter";

const app = express();

app.use(helmet({ contentSecurityPolicy: false }));
// app.use(function (req, res, next) {
//   res.setHeader(
//     "Content-Secuurity-Policy",
//     "script-src 'self' https://archive.org"
//   );
//   return next();
// });
// app.use(
//   helmet.contentSecurityPolicy({
//     directives: {
//       defaultSrc: ["'self'", "http://*.fontawesome.com"],
//       scriptSrc: ["'self'", "http://*.fontawesome.com"],
//       styleSrc: ["'self'", "'unsafe-inline'"],
//       upgradeInsecureRequests: [],
//     },
//   })
// );
app.set("view engine", "pug");
app.use("/uploads", express.static("uploads"));
app.use("/static", express.static("static"));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("dev"));

app.use(localsMiddleware);

app.use(routes.home, globalRouter);
app.use(routes.users, userRouter);
app.use(routes.videos, videoRouter);
export default app;
