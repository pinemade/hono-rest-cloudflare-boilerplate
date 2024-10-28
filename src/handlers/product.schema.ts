import { createRoute, z } from "@hono/zod-openapi";

const BASE_TAGS = ["Product"];

export const LIST_PRODUCT_SCHEMA = createRoute({
  tags: BASE_TAGS,
  method: "get",
  path: "/",
  request: {
    query: z.object({
      is_expired: z.union([z.literal(true), z.literal(false)]),
    }),
  },
  responses: {
    200: {
      description: "Success",
      content: {
        "application/json": {
          schema: z.array(
            z.object({
              name: z.string(),
              is_expired: z.boolean(),
            })
          ),
        },
      },
    },
  },
});
