import { run } from "vite-plugin-run";

export const codegenApi = () => run([
    {
      name: "generate api client",
      run: [
        "npx",
        "@rtk-query/codegen-openapi",
        "./src/shared/api/config.ts",
      ],
      pattern: [
        "./src/shared/api/config.ts",
        "./src/shared/api/api.spec.yaml",
      ],
    },
  ])