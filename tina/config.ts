import { defineConfig } from "tinacms";
import { indexFields } from "./home";

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "main";

export default defineConfig({
  branch,
  clientId: "6602f015-0424-4f1c-b71e-fc4d2780ff41", // Get this from tina.io
  token: "8776dad76991d2bd507221e1d7d498c51859d7b8", // Get this from tina.io

  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "images",
      publicFolder: "public",
    },
  },
  schema: {
    collections: [
      {
        format: "md",
        label: "Page d'accueil",
        name: "page_d_accueil",
        path: "content",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
          router: ({ document }) => {
            if (document._sys.filename === "_index") {
              return `/`;
            }
            return undefined;
          },
        },
        match: {
          include: "_index",
        },
        fields: [
          ...indexFields(),
        ]
      },
      /*{
        format: "json",
        label: "Configuration",
        name: "configuration_general",
        path: "config/",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        fields: [
          //...configFields(),
        ]
      },
      {
        format: "mdx",
        label: "Blog",
        name: "blog",
        path: "content/posts/",
        match: {*/
          //include: "**/*",
          /*exclude:"_index.md",
        },
        fields: [
          //...blogFields(),
        ],
      },*/
    ],
  },
});
