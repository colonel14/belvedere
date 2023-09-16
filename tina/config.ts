import { Media, defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "main";

export default defineConfig({
  branch,
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID!,
  token: process.env.TINA_TOKEN!,
  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "public",
    },
  },
  schema: {
    collections: [
      {
        name: "post",
        label: "Posts",
        path: "content/posts",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
          },
        ],
        ui: {
          // This is an DEMO router. You can remove this to fit your site
          router: ({ document }) => `/demo/blog/${document._sys.filename}`,
        },
      },

      {
        name: "page",
        label: "Pages",
        path: "content/pages",
        format: "md",
        ui: {
          router: (props) => {
            if (props.document._sys.relativePath == "home.md") {
              return "/";
            }
            return props.document._sys.filename;
          },
        },
        fields: [
          {
            name: "title",
            label: "Hero Title",
            type: "string",
          },
          {
            label: "Hero Image",
            name: "heroImg",
            type: "image",
          },
          {
            name: "heading",
            label: "Main Heading",
            type: "rich-text",
          },
          {
            name: "body",
            label: "Body",
            type: "rich-text",
          },
          {
            name: "blocks",
            label: "Blocks",
            type: "object",
            list: true,
            templates: [
              {
                name: "heroTitle",
                label: "Hero Title",
                fields: [
                  {
                    name: "message",
                    type: "string",
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
});
