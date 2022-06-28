import type { Context } from "https://deploy-preview-45--edge-bootstrap.netlify.app/bootstrap/index-combined.ts";

export default (request: Request, context: Context) => {
  return context.json(context.site);
};
