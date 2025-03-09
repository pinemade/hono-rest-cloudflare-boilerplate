import { createEnv } from '@t3-oss/env-core'
import { z } from 'zod'

const env = createEnv({
  server: {
    API_DOCS_PATH: z.string().nonempty().default('/reference'),
    API_DOCS_JSON_PATH: z.string().nonempty().default('/reference.json'),
  },
  runtimeEnv: {},
})

export default env
