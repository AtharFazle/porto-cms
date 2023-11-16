import path from "path";
import type { CollectionConfig } from "payload/types";

import { editors } from "../access/editors";
import { anyone } from "../access/anyone";

const Carrousel: CollectionConfig = {
  slug: "carrousel",
  upload: {
    staticDir: path.resolve(__dirname, '../../uploads'),
  },
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
    },
    {
      name: "image",
      type: "upload",
      relationTo: "media",
      required: true,
    },
  ],
};

export default Carrousel;
