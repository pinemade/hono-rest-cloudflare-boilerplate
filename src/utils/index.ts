import { OpenAPIHono } from '@hono/zod-openapi'

export const App = OpenAPIHono<{ Bindings: CloudflareBindings }>
