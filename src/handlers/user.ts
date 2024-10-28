import { LIST_USER_SCHEMA } from "@/src/handlers/user.schema";
import { OpenAPIHono } from "@hono/zod-openapi";

export default new OpenAPIHono<{ Bindings: CloudflareBindings }>()

  .openapi(LIST_USER_SCHEMA, function (c) {
    return c.json(
      [
        {
          name: "person name",
          age: 2,
        },
      ],
      200
    );
  })
  .get("/");
