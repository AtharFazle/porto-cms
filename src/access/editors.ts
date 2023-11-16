import type { AccessArgs } from 'payload/config'

import { checkRole } from '../collections/Users/checkRole'
import type { User } from '../payload-types'

type isEditors = (args: AccessArgs<unknown, User>) => boolean

export const editors: isEditors = ({ req: { user } }) => {
  return checkRole(['admin', 'content-editor', 'content-manager'], user)
}
