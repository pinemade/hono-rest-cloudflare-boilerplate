import { productRoute, userRoute } from "@/src/handlers";
import { env, oaconfig } from "@/src/configs";
import { requestIDMiddleware, scalarMiddleware } from "@/src/middlewares";
import { App } from "@/src/utils";

const app = new App()

  /**
   * openapi doc
   */
  .doc(env.API_DOCS_JSON_PATH, oaconfig)

  /**
   * global middlewares
   */
  .use(requestIDMiddleware)
  .use(env.API_DOCS_PATH, scalarMiddleware)

  /**
   * global api routes
   */
  .route("/users", userRoute)
  .route("/products", productRoute);

export default app;
