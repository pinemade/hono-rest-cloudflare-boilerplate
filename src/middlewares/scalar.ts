import { apiReference } from "@scalar/hono-api-reference";
import { env } from "@/src/configs";

export default apiReference({
  layout: "modern",
  spec: {
    url: env.API_DOCS_JSON_PATH,
  },
});
