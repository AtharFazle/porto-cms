import { GlobalConfig } from 'payload/types'
import { anyone } from '../access/anyone'
import { admins } from '../access/admins'

const Home: GlobalConfig = {
  slug: 'Home',
  access:{
    read:anyone,
    update:admins
  },
  fields: [
    {
      name:"heading_text",
      type:"text",
      required:true
    },
    {
      name:"heading_image",
      type:"upload",
      relationTo:"media",
    },
    {
        name: 'content',
        type:"array",
        localized:true,
        fields:[
            {
                name:"title",
                type:"text",
                required:true
            },
            {
                name:"description",
                type:"richText",
                required:true
            }
        ]
    }
  ],
}

export default Home
