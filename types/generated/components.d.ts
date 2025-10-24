import type { Schema, Struct } from '@strapi/strapi';

export interface SharedBannerInterno extends Struct.ComponentSchema {
  collectionName: 'components_shared_banner_internos';
  info: {
    displayName: 'bannerInterno';
    icon: 'monitor';
  };
  attributes: {
    banner: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    subtitulo: Schema.Attribute.Text;
    titulo: Schema.Attribute.String;
  };
}

export interface SharedCasos extends Struct.ComponentSchema {
  collectionName: 'components_shared_casos';
  info: {
    displayName: 'casos';
    icon: 'check';
  };
  attributes: {
    antes: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    despues: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    titulo: Schema.Attribute.String;
  };
}

export interface SharedDoctores extends Struct.ComponentSchema {
  collectionName: 'components_shared_doctores';
  info: {
    displayName: 'Doctores';
    icon: 'doctor';
  };
  attributes: {
    especialidad: Schema.Attribute.Text;
    Imagen: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    nombre: Schema.Attribute.String;
    puesto: Schema.Attribute.String;
  };
}

export interface SharedHighlight extends Struct.ComponentSchema {
  collectionName: 'components_shared_highlights';
  info: {
    displayName: 'highlight';
    icon: 'lightbulb';
  };
  attributes: {
    description: Schema.Attribute.Text;
    icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    titulo: Schema.Attribute.String;
  };
}

export interface SharedMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {
    file: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
  };
}

export interface SharedQuote extends Struct.ComponentSchema {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'indent';
  };
  attributes: {
    body: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedRichText extends Struct.ComponentSchema {
  collectionName: 'components_shared_rich_texts';
  info: {
    description: '';
    displayName: 'Rich text';
    icon: 'align-justify';
  };
  attributes: {
    body: Schema.Attribute.RichText;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: '';
    displayName: 'Seo';
    icon: 'allergies';
    name: 'Seo';
  };
  attributes: {};
}

export interface SharedServicios extends Struct.ComponentSchema {
  collectionName: 'components_shared_servicios';
  info: {
    displayName: 'servicios';
    icon: 'doctor';
  };
  attributes: {
    description: Schema.Attribute.Text;
    imagen: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    titulo: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

export interface SharedSlider extends Struct.ComponentSchema {
  collectionName: 'components_shared_sliders';
  info: {
    description: '';
    displayName: 'Slider';
    icon: 'address-book';
  };
  attributes: {
    files: Schema.Attribute.Media<'images', true>;
  };
}

export interface TratamientosFaq extends Struct.ComponentSchema {
  collectionName: 'components_tratamientos_faqs';
  info: {
    displayName: 'faq';
    icon: 'bulletList';
  };
  attributes: {};
}

export interface TratamientosInternaCompleta extends Struct.ComponentSchema {
  collectionName: 'components_tratamientos_interna_completas';
  info: {
    displayName: 'InternaCompleta';
    icon: 'bulletList';
  };
  attributes: {
    Imagen: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    ImagenBanner: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    Seo: Schema.Attribute.Component<'shared.seo', false>;
    Subtitulo: Schema.Attribute.String;
    SubtituloBanner: Schema.Attribute.Text;
    Tabs: Schema.Attribute.Component<'tratamientos.tabs', true>;
    Titulo: Schema.Attribute.String;
    TituloBanner: Schema.Attribute.String;
    UrlBoton: Schema.Attribute.String;
  };
}

export interface TratamientosTabs extends Struct.ComponentSchema {
  collectionName: 'components_tratamientos_tabs';
  info: {
    displayName: 'tabs';
    icon: 'folder';
  };
  attributes: {};
}

export interface TratamientosTratamientoEspecial
  extends Struct.ComponentSchema {
  collectionName: 'components_tratamientos_tratamiento_especials';
  info: {
    displayName: 'tratamientoEspecial';
    icon: 'command';
  };
  attributes: {
    Imagen: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    Tabs: Schema.Attribute.Component<'tratamientos.tabs', true>;
    Titulo: Schema.Attribute.String;
    UrlBoton: Schema.Attribute.String;
  };
}

export interface TratamientosTratamientos extends Struct.ComponentSchema {
  collectionName: 'components_tratamientos_tratamientos';
  info: {
    displayName: 'Tratamientos';
    icon: 'user';
  };
  attributes: {
    botonCita: Schema.Attribute.String;
    descripcion: Schema.Attribute.RichText;
    imagen: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    titulo: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'shared.banner-interno': SharedBannerInterno;
      'shared.casos': SharedCasos;
      'shared.doctores': SharedDoctores;
      'shared.highlight': SharedHighlight;
      'shared.media': SharedMedia;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.servicios': SharedServicios;
      'shared.slider': SharedSlider;
      'tratamientos.faq': TratamientosFaq;
      'tratamientos.interna-completa': TratamientosInternaCompleta;
      'tratamientos.tabs': TratamientosTabs;
      'tratamientos.tratamiento-especial': TratamientosTratamientoEspecial;
      'tratamientos.tratamientos': TratamientosTratamientos;
    }
  }
}
