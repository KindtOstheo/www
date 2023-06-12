import { defineConfig } from "tinacms";
import { indexFields } from "./home";
import { configsFields, menuFields, socialFields, themeFields } from "./confFile";

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
      {
        format: "json",
        label: "Configuration Meta",
        name: "configuration_general",
        path: "config",
        match: {
          include: "config",
        },
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        fields: [
          ...configsFields(),
        ]
      },
      {
        format: "json",
        label: "Configuration Menu",
        name: "configuration_menu",
        path: "config",
        match: {
          include: "menu",
        },
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        fields: [
          ...menuFields(),
        ]
      },
      {
        format: "json",
        label: "Configuration Réseaux Sociaux",
        name: "configuration_social",
        path: "config",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        match: {
          include: "social",
        },
        fields: [
          ...socialFields(),
        ]
      },
      {
        format: "json",
        label: "Configuration Thème",
        name: "configuration_theme",
        path: "config",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        match: {
          include: "theme",
        },
        fields: [
          ...themeFields(),
        ]
      },
      /*{
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
