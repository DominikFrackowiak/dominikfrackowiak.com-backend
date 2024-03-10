import type { Schema, Attribute } from '@strapi/strapi';

export interface TextBlocksParagraph extends Schema.Component {
  collectionName: 'components_text_blocks_paragraphs';
  info: {
    displayName: 'Paragraph';
    description: '';
  };
  attributes: {
    Title: Attribute.String & Attribute.Required;
    Paragraph: Attribute.RichText & Attribute.Required;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'text-blocks.paragraph': TextBlocksParagraph;
    }
  }
}
