import { env } from '@/src/configs'
import { apiReference } from '@scalar/hono-api-reference'

export default apiReference({
  layout: 'modern',
  spec: {
    url: env.API_DOCS_JSON_PATH,
  },
})
