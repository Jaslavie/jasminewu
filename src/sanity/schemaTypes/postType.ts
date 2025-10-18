import { defineField, defineType } from "sanity";

export const postType = defineType({
  name: "project",
  title: "Project",
  type: "document",
  fields: [
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title" },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "category",
      title: "Category",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "title",
      title: "Project Title",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "logo",
      title: "Logo/Thumbnail",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "metadata",
      title: "Project Metadata",
      type: "object",
      fields: [
        defineField({
          name: "role",
          title: "Role(s)",
          type: "array",
          of: [{ type: "string" }],
        }),
        defineField({
          name: "duration",
          title: "Duration",
          type: "string",
        }),
        defineField({
          name: "team",
          title: "Team",
          type: "array",
          of: [{ type: "string" }],
        }),
        defineField({
          name: "results",
          title: "Results",
          type: "array",
          of: [{ type: "string" }],
        }),
      ],
    }),
    defineField({
      name: "thumbnailImage",
      title: "Project Thumbnail Image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "content",
      title: "Project Content",
      type: "array",
      of: [
        {
          type: "block",
          styles: [
            { title: "Normal", value: "normal" },
            { title: "H1", value: "h1" },
            { title: "H2", value: "h2" },
            { title: "H3", value: "h3" },
            { title: "H4", value: "h4" },
            { title: "Quote", value: "blockquote" },
          ],
          lists: [
            { title: "Bullet", value: "bullet" },
            { title: "Number", value: "number" },
          ],
          marks: {
            decorators: [
              { title: "Strong", value: "strong" },
              { title: "Emphasis", value: "em" },
            ],
            annotations: [
              {
                name: "link",
                type: "object",
                title: "Link",
                fields: [
                  {
                    name: "href",
                    type: "url",
                    title: "URL",
                  },
                ],
              },
            ],
          },
        },
        {
          type: "image",
          name: "image",
          title: "Image",
          options: {
            hotspot: true,
          },
          fields: [
            {
              name: "alt",
              type: "string",
              title: "Alt Text",
            },
            {
              name: "caption",
              type: "string",
              title: "Caption",
            },
            {
              name: "maxHeight",
              type: "string",
              title: "Max Height (CSS)",
              description: "e.g., '800px', '400px'",
            },
          ],
        },
        {
          type: "file",
          name: "video",
          title: "Video",
          options: {
            accept: "video/*",
          },
          fields: [
            {
              name: "alt",
              type: "string",
              title: "Alt Text",
            },
            {
              name: "caption",
              type: "string",
              title: "Caption",
            },
            {
              name: "maxHeight",
              type: "string",
              title: "Max Height (CSS)",
            },
          ],
        },
        {
          type: "object",
          name: "projectSection",
          title: "Project Section",
          fields: [
            {
              name: "title",
              type: "string",
              title: "Section Title",
            },
            {
              name: "content",
              type: "array",
              title: "Section Content",
              of: [
                {
                  type: "block",
                  styles: [
                    { title: "Normal", value: "normal" },
                    { title: "H1", value: "h1" },
                    { title: "H2", value: "h2" },
                    { title: "H3", value: "h3" },
                    { title: "H4", value: "h4" },
                    { title: "Quote", value: "blockquote" },
                  ],
                  lists: [
                    { title: "Bullet", value: "bullet" },
                    { title: "Number", value: "number" },
                  ],
                  marks: {
                    decorators: [
                      { title: "Strong", value: "strong" },
                      { title: "Emphasis", value: "em" },
                    ],
                    annotations: [
                      {
                        name: "link",
                        type: "object",
                        title: "Link",
                        fields: [
                          {
                            name: "href",
                            type: "url",
                            title: "URL",
                          },
                        ],
                      },
                    ],
                  },
                },
                {
                  type: "image",
                  name: "image",
                  title: "Image",
                  options: {
                    hotspot: true,
                  },
                  fields: [
                    {
                      name: "alt",
                      type: "string",
                      title: "Alt Text",
                    },
                    {
                      name: "caption",
                      type: "string",
                      title: "Caption",
                    },
                    {
                      name: "maxHeight",
                      type: "string",
                      title: "Max Height (CSS)",
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          type: "object",
          name: "projectSectionRow",
          title: "Project Section Row",
          fields: [
            {
              name: "title",
              type: "string",
              title: "Section Title",
            },
            {
              name: "content",
              type: "array",
              title: "Section Content",
              of: [
                {
                  type: "block",
                  styles: [
                    { title: "Normal", value: "normal" },
                    { title: "H1", value: "h1" },
                    { title: "H2", value: "h2" },
                    { title: "H3", value: "h3" },
                    { title: "H4", value: "h4" },
                    { title: "Quote", value: "blockquote" },
                  ],
                  lists: [
                    { title: "Bullet", value: "bullet" },
                    { title: "Number", value: "number" },
                  ],
                  marks: {
                    decorators: [
                      { title: "Strong", value: "strong" },
                      { title: "Emphasis", value: "em" },
                    ],
                    annotations: [
                      {
                        name: "link",
                        type: "object",
                        title: "Link",
                        fields: [
                          {
                            name: "href",
                            type: "url",
                            title: "URL",
                          },
                        ],
                      },
                    ],
                  },
                },
              ],
            },
            {
              name: "image",
              type: "image",
              title: "Section Image",
              options: {
                hotspot: true,
              },
              fields: [
                {
                  name: "alt",
                  type: "string",
                  title: "Alt Text",
                },
                {
                  name: "caption",
                  type: "string",
                  title: "Caption",
                },
                {
                  name: "maxHeight",
                  type: "string",
                  title: "Max Height (CSS)",
                },
              ],
            },
          ],
        },
      ],
    }),
    defineField({
      name: "featured",
      title: "Featured Project",
      type: "boolean",
      description: "Whether this project should be featured prominently",
      initialValue: false,
    }),
    defineField({
      name: "order",
      title: "Display Order",
      type: "number",
      description:
        "Order in which projects should be displayed (lower numbers first)",
      validation: (rule) => rule.required().min(0),
    }),
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "category",
      media: "thumbnailImage",
    },
    prepare(selection) {
      const { title, subtitle, media } = selection;
      return {
        title: title,
        subtitle: subtitle,
        media: media,
      };
    },
  },
  orderings: [
    {
      title: "Display Order",
      name: "orderAsc",
      by: [{ field: "order", direction: "asc" }],
    },
  ],
});
