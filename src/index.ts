import { OpenAPIHono } from "@hono/zod-openapi";
import { productRoute, userRoute } from "@/src/handlers";
import { env, honoOAConfig } from "@/src/configs";
import { requestIDMiddleware, scalarMiddleware } from "@/src/middlewares";

const app = new OpenAPIHono<{ Bindings: CloudflareBindings }>()

  /**
   * openapi doc
   */
  .doc(env.API_DOC_PATH, honoOAConfig)

  /**
   * global middlewares
   */
  .use(requestIDMiddleware)
  .use(env.API_REFERENCE_PATH, scalarMiddleware)

  /**
   * global api routes
   */
  .route("/users", userRoute)
  .route("/products", productRoute);

export default app;
