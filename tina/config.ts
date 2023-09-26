import { Media, defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "main";

const lifeAndLearningPaths = [
  "Academic Page.md",
  "Early Years Page.md",
  "primary-stage.md",
  "Secondary School Page.md",
];

export default defineConfig({
  branch,
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID!,
  token: process.env.TINA_TOKEN!,
  // clientId: "",
  // token: "",
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
        label: "News",
        path: "content/posts",
        defaultItem: () => {
          return {
            // Return a default title and the current date as the default date
            title: "New news",
            date: new Date().toISOString(),
          };
        },
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "string",
            name: "excerpt",
            label: "Excerpt",
          },
          {
            name: "newsImg",
            label: "News Image",
            type: "image",
          },
          {
            name: "category",
            label: "Category",
            type: "reference",
            collections: ["category"],
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
          },
          {
            label: "Date",
            name: "date",
            type: "datetime",
          },
        ],
        ui: {
          // This is an DEMO router. You can remove this to fit your site
          router: ({ document }) => `/latest-news/${document._sys.filename}`,
        },
      },
      {
        name: "event",
        label: "Events",
        path: "content/events",
        defaultItem: () => {
          return {
            // Return a default title and the current date as the default date
            title: "New Eevnt",
            date: new Date().toISOString(),
          };
        },
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "string",
            name: "excerpt",
            label: "Excerpt",
          },
          {
            name: "eventImg",
            label: "Event Image",
            type: "image",
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
          },
          {
            label: "Date",
            name: "date",
            type: "datetime",
          },
        ],
        ui: {
          // This is an DEMO router. You can remove this to fit your site
          router: ({ document }) => `/events/${document._sys.filename}`,
        },
      },
      {
        name: "category",
        label: "Category",
        path: "content/categories",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Category Name",
            isTitle: true,
            required: true,
          },
        ],
        ui: {
          // This is an DEMO router. You can remove this to fit your site
          router: ({ document }) => `/demo/blog/${document._sys.filename}`,
        },
      },
      {
        name: "home",
        label: "Home",
        path: "content/home",
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
            name: "blocks",
            label: "Blocks",
            type: "object",
            list: true,
            ui: {
              visualSelector: true,
            },
            templates: [
              {
                name: "hero",
                label: "Hero",
                fields: [
                  {
                    name: "title",
                    label: "Heading Title",
                    type: "rich-text",
                  },
                  {
                    name: "heroDesc",
                    label: "Hero Text",
                    type: "string",
                    ui: {
                      component: "textarea",
                    },
                  },

                  {
                    name: "linkTitle",
                    label: "Link Title",
                    type: "string",
                  },
                  {
                    name: "linkUrl",
                    label: "Link Url",
                    type: "string",
                  },
                ],
              },
            ],
          },
        ],
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
            name: "blocks",
            label: "Blocks",
            type: "object",
            list: true,
            ui: {
              visualSelector: true,
            },
            templates: [
              {
                name: "heading",
                label: "Heading",
                fields: [
                  {
                    name: "headingTitle",
                    label: "Heading Title",
                    type: "rich-text",
                  },
                  {
                    name: "headingTitleColor",
                    label: "Heading Title Color",
                    type: "string",
                    ui: {
                      component: "color",
                    },
                  },
                  {
                    name: "headingSubtitle",
                    label: "Heading Subtitle",
                    type: "string",
                  },
                  {
                    name: "headingSubtitleColor",
                    label: "Heading Subtitle Color",
                    type: "string",
                    ui: {
                      component: "color",
                    },
                  },
                ],
              },
              {
                name: "text",
                label: "Rich Text",
                fields: [
                  {
                    name: "body",
                    label: "Body",
                    type: "rich-text",
                  },
                ],
              },
              {
                name: "features",
                label: "Features Section",
                fields: [
                  {
                    name: "title",
                    label: "Feature Title",
                    type: "rich-text",
                  },
                  {
                    name: "subtitle",
                    label: "Feature Subtitle",
                    type: "string",
                  },
                  {
                    name: "featuresList",
                    label: "Features List",
                    type: "object",
                    list: true,
                    templates: [
                      {
                        name: "featureBox",
                        label: "Feature Box",
                        fields: [
                          {
                            name: "title",
                            label: "Feature Title",
                            type: "string",
                          },
                          {
                            name: "color",
                            label: "Number Color",
                            type: "string",
                            ui: {
                              component: "color",
                            },
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
              {
                name: "circles",
                label: "Circles Section",
                fields: [
                  {
                    name: "circlesTitle",
                    label: "Circle Title",
                    type: "string",
                  },
                  {
                    name: "circlesList",
                    label: "Circles List",
                    type: "object",
                    list: true,
                    templates: [
                      {
                        name: "circle",
                        label: "Circle",
                        fields: [
                          {
                            name: "title",
                            label: "Circle Title",
                            type: "rich-text",
                          },
                          {
                            name: "color",
                            label: "Number Color",
                            type: "string",
                            ui: {
                              component: "color",
                            },
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
              {
                name: "learningAreas",
                label: "Learning Areas",
                fields: [
                  {
                    name: "areaTitle",
                    label: "Area Title",
                    type: "string",
                  },
                  {
                    name: "areaList",
                    label: "Area List",
                    type: "object",
                    list: true,
                    templates: [
                      {
                        name: "item",
                        label: "Item",
                        fields: [
                          {
                            name: "title",
                            label: "Title",
                            type: "string",
                          },
                          {
                            name: "color",
                            label: "Background Color",
                            type: "string",
                            ui: {
                              component: "color",
                            },
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
              {
                name: "grid",
                label: "Grid",
                fields: [
                  {
                    name: "columnsCount",
                    label: "Columns Count",
                    type: "number",
                  },
                  {
                    name: "gridList",
                    label: "Grid List",
                    type: "object",
                    list: true,
                    templates: [
                      {
                        name: "item",
                        label: "Item",
                        fields: [
                          {
                            name: "name",
                            label: "Name",
                            type: "string",
                          },
                          {
                            name: "color",
                            label: "Background Color",
                            type: "string",
                            ui: {
                              component: "color",
                            },
                          },
                        ],
                      },
                    ],
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

interface ColorConfig {
  component: "color";
  name: string;
  label?: string;
  description?: string;
  colorFormat?: "hex" | "rgb"; // Defaults to "hex"
  colors?: string[];
  widget?: "sketch" | "block"; // Defaults to "sketch"
}
