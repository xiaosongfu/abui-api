import { Context, Hono } from "hono";

export function appRouters(): Hono {
  const router = new Hono();
  router.get("", apps);
  return router;
}

export function apps(ctx: Context): Response {
  return ctx.json({ success: true });
}
