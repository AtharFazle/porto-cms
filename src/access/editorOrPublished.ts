import type { Access } from 'payload/config'

import { checkRole } from '../collections/Users/checkRole'

export const editorOrPublished: Access = ({ req: { user } }) => {
  if (user && checkRole(['admin', 'content-editor', 'content-manager'], user)) {
    return true
  }

  return {
    _status: {
      equals: 'published',
    },
  }
}
