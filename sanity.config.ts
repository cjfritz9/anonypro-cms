import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'Anonypro Blog',

  projectId: 'vvw86v5i',
  dataset: 'production',

  plugins: [structureTool(), visionTool()],

  document: {
    newDocumentOptions: (schemas, {currentUser}) => {
      if (currentUser?.id !== 'pN0pAgxIk') {
        return schemas.filter(({templateId}: {templateId: string}) => templateId !== 'admin')
      } else {
        return schemas
      }
    },
  },

  schema: {
    types: schemaTypes,
  },
})
