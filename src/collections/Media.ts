import path from 'path'
import type { CollectionConfig } from 'payload/types'

import { editors } from '../access/editors';
import { anyone } from '../access/anyone';
import { slateEditor } from '@payloadcms/richtext-slate';

const Media: CollectionConfig = {
  slug: 'media',
  upload: {
    staticDir: path.resolve(__dirname, '../../uploads'),
  },
  access: {
    read: anyone,
    update: editors,
    create: editors,
    delete: editors
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
      required: true,
      localized: true
    },
    {
      name: 'caption',
      type: 'richText',
      editor: slateEditor({
        admin: {
          elements: ['link']
        }
      }),
      localized: true
    },
  ],
}

export default Media;