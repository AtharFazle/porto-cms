import path from 'path'

import { payloadCloud } from '@payloadcms/plugin-cloud'
import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { webpackBundler } from '@payloadcms/bundler-webpack'
import { slateEditor } from '@payloadcms/richtext-slate'
import { buildConfig } from 'payload/config'

import Users from './collections/Users'
import Carrousel from './collections/carrousel'
import Home from './globals/home'
import Media from './collections/Media'
import Articles from './collections/articles'
import Job from './collections/job'
import seo from '@payloadcms/plugin-seo'
import Projects from './collections/projects'

export default buildConfig({
  admin: {
    user: Users.slug,
    bundler: webpackBundler(),
  },
  editor: slateEditor({}),
  localization: {
    locales: [
      { label: "English", code: "en" },
      { label: "Bahasa Indonesia", code: "id" }
    ],
    defaultLocale: "id",
    fallback: true
  },
  collections: [Users,Media,Carrousel,Job,Articles,Projects],
  globals:[
    Home
  ],
  cors:"*",
  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts'),
  },
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, 'generated-schema.graphql'),
  },
  plugins: [
      seo({
        collections: ['Articles']
      }),
  ],
  db: mongooseAdapter({
    url: process.env.DATABASE_URI,
  }),
})
