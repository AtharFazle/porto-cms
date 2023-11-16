import path from 'path'
import type { CollectionConfig } from 'payload/types'

import { editors } from '../access/editors';
import { anyone } from '../access/anyone';
import { slateEditor } from '@payloadcms/richtext-slate';

const Job: CollectionConfig = {
  slug: 'Job',
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
        name:"company",
        type: "text",
        required:true
    },
    {
        name:"title",
        type:"text",
        required:true
    },
    {
        name: "dateStart",
        type: "date",
        required: true
    },
    {
        name: "dateEnd",
        type: "date",
    },
    {
        name:"companyLogo",
        type: "upload",
        relationTo: "media",
        required:true
    }
  ],
}

export default Job;