import type { Context } from "netlify:edge";

export default (request: Request, context: Context) => {
  return context.json(context.site);
};
