import type { AccessArgs } from 'payload/config'

import { checkRole } from '../collections/Users/checkRole'
import type { User } from '../payload-types'

type isContentManagers = (args: AccessArgs<unknown, User>) => boolean

export const contentManagers: isContentManagers = ({ req: { user } }) => {
  return checkRole(['admin', 'content-manager'], user)
}
