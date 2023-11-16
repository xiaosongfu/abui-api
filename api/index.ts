import { Hono } from "hono";
import { handle } from "hono/vercel";
import { userRouters } from "./auth";
import { appRouters } from "./app";

export const config = {
  runtime: "edge",
};

const app = new Hono();

app.route("/v1/user", userRouters());
app.route("/v1/apps", appRouters());

export default handle(app);
