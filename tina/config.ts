import { defineConfig } from "tinacms";
import { indexFields } from "./home";
import { configsFields, menuFields, socialFields, themeFields } from "./confFile";
import { legalFields } from "./legal";
import { blogFields } from "./blog";
// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "main";
const clientId = process.env.CLIENTID;
const token = process.env.TOKEN;
const indexerToken =process.env.INDEXERTOKEN;
export default defineConfig({
  branch,
  clientId, // Get this from tina.io
  token, // Get this from tina.io

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
        format: "mdx",
        label: "Blog",
        name: "blog",
        path: "content/posts/",
        match: {
          include: "**/*",
          exclude:"_index.md",
        },
        defaultItem: () => {
          return {
            author:{
              name: "Dominique Kindt",
              avatar: "/images/author/default.jpg",
            }
          }
        },
        fields: [
          ...blogFields(),
        ],
      },
      {
        format: "md",
        label: "Condition Générale",
        name: "legal",
        path: "content",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        match: {
          include: "terms-policy",
        },
        fields: [
          ...legalFields(),
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
    ],
  },
  search: {
    tina: {
      indexerToken,
      stopwordLanguages: ['fra']
    },
    indexBatchSize: 100,
    maxSearchIndexFieldLength: 100
  },
});
