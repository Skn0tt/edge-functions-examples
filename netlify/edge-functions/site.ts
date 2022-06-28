import type { Context } from "https://deploy-preview-45--edge-bootstrap.netlify.app/v1/index.ts";

export default (request: Request, context: Context) => {
  return context.json(context.site);
};
