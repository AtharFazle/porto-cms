import path from 'path'
import type { CollectionConfig } from 'payload/types'

import { editors } from '../access/editors';
import { anyone } from '../access/anyone';
import { slateEditor } from '@payloadcms/richtext-slate';

const Projects: CollectionConfig = {
  slug: 'Projects',
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
        name:"name",
        type: "text",
        required:true
    },
    {
        name:"desc",
        type:"textarea",
        required:true
    },
    {
        name:"link",
        type:"text",
        required:true
    },
    {
        name:"HeadingImg",
        type: "upload",
        relationTo: "media",
        required:true
    }
  ],
}

export default Projects;