import { type FreshContext } from "$fresh/server.ts";

export function handler(
  req: Request,
  ctx: FreshContext,
) {
  // Get the current path
  // const url = new URL(req.url);
  // const path = url.pathname;

  return ctx.next();
}
