import path from "path";
import type { CollectionConfig } from "payload/types";

import { editors } from "../access/editors";
import { anyone } from "../access/anyone";
import { slateEditor } from "@payloadcms/richtext-slate";
import { slugField } from "../fields/slug";

const Articles: CollectionConfig = {
  slug: "Articles",
  access: {
    read: anyone,
    update: editors,
    create: editors,
    delete: editors,
  },
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
      localized: true,
    },
    {
        name:"category",
        type:"select",
        required:true,
        options:[
            {
                value:"technology",
                label:"Technology"
            },
            {
                value:"reflection",
                label:"Reflection"
            }
        ]
    },
    {
      name: "headingImg",
      type: "upload",
      relationTo: "media",
      required: true,
    },
    {
      name: "description",
      type: "richText",
      editor: slateEditor({}),
      required: true,
      localized:true
    },
    slugField()
  ],
};

export default Articles;
