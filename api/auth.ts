import { Context, Hono } from "hono";
import { generateNonce } from "siwe";

export function userRouters(): Hono {
  const router = new Hono();
  router.get("/nonce", nonce);
  router.post("/login", login);
  return router;
}

export function nonce(ctx: Context): Response {
  return ctx.json({ nonce: generateNonce() });
}

export function login(ctx: Context): Response {
  return ctx.json({ success: true });
}
