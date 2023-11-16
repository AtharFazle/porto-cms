import type { Access } from 'payload/types'

import { checkRole } from '../checkRole'

// Allow admins to do the operation.
// Yet, allow non-admin users to edit only its own account.
const adminsAndUser: Access = ({ req: { user } }) => {
  if (user) {
    if (checkRole(['admin'], user)) {
      return true
    }

    return {
      id: user.id,
    }
  }

  return false
}

export default adminsAndUser
