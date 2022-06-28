import type { Context } from "https://edge-bootstrap.netlify.app/v1/index.ts";

export default (request: Request, context: Context) => {
  return context.json(context.site);
};
