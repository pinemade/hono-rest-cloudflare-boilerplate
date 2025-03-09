import { LIST_USER_SCHEMA } from '@/src/handlers/user.schema'
import { App } from '@/src/utils'

export default new App()

  .openapi(LIST_USER_SCHEMA, (c) => {
    return c.json(
      [
        {
          name: 'person name',
          age: 2,
        },
      ],
      200,
    )
  })
  .get('/')
