import { LIST_PRODUCT_SCHEMA } from "@/src/handlers/product.schema";
import { OpenAPIHono } from "@hono/zod-openapi";

export default new OpenAPIHono<{ Bindings: CloudflareBindings }>()

  .openapi(LIST_PRODUCT_SCHEMA, function (c) {
    c.req.query("is_expired");
    return c.json(
      [
        {
          name: "person name",
          is_expired: false,
        },
      ],
      200
    );
  })
  .get("/");
