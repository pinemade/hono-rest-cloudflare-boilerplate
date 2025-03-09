import type { OpenAPIObjectConfigure } from '@hono/zod-openapi'

export default {
  info: {
    title: 'Example OpenAPI',
    version: '0.0.0',
    description: 'Example OpenAPI Description',
  },
  openapi: '3.0.0',
} satisfies OpenAPIObjectConfigure<
  {
    Bindings: CloudflareBindings
  },
  string
>
