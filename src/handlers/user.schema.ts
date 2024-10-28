import { createRoute, z } from "@hono/zod-openapi";

const BASE_TAGS = ["User"];

export const LIST_USER_SCHEMA = createRoute({
  tags: BASE_TAGS,
  method: "get",
  path: "/",
  request: {
    query: z.object({
      is_member: z.boolean().optional(),
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
              age: z.number(),
            })
          ),
        },
      },
    },
  },
});
