import type { ConfigFile } from '@rtk-query/codegen-openapi'

const config: ConfigFile = {
  schemaFile: './api.spec.yaml',
  apiFile: './api.ts',
  outputFile: './apiClient.ts',
  exportName: 'apiClient',
  hooks: true,
}

export default config