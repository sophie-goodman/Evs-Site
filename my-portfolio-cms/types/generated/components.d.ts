import type { Schema, Struct } from '@strapi/strapi';

export interface ArtArtPiece extends Struct.ComponentSchema {
  collectionName: 'components_art_art_pieces';
  info: {
    displayName: 'Art Piece';
  };
  attributes: {
    description: Schema.Attribute.RichText;
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'art.art-piece': ArtArtPiece;
    }
  }
}
