import type { TinaField } from "tinacms";
export function configsFields() {
    return [
        {
            type: "object",
            name: "site",
            label: "Configuration générale du site",
            fields: [
                {
                    type: "string",
                    name: "title",
                    label: "Titre du site",
                },
                {
                    type: "string",
                    name: "base_url",
                    label: "URL de base du site",
                },
                {
                    type: "image",
                    name: "favicon",
                    label: "Favicon du site",
                },
                {
                    type: "image",
                    name: "logo",
                    label: "Logo du site",
                },
                {
                    type: "string",
                    name: "logo_width",
                    label: "Largeur en px du logo",
                    ui:{
                        component:"number"
                    }
                },
                {
                    type: "string",
                    name: "logo_height",
                    label: "Hauteur en px du logo",
                    ui:{
                        component:"number"
                    }
                },
                {
                    type: "string",
                    name: "logo_text",
                    label: "Titre du logo du site",
                }
            ],
        },
        {
            type: "object",
            name: "params",
            label: "Paramètre footer",
            fields: [
                {
                    type: "string",
                    name: "tag_manager_id",
                    label: "Google Tag Manager",
                },
                {
                    type: "string",
                    name: "footer_content",
                    label: "Description du footer",
                },
                {
                    type: "string",
                    name: "copyright",
                    label: "Copyright du site",
                },
            ],
        },
        {
            type: "object",
            name: "contact_info",
            label: "Information de contact",
            fields: [
                {
                    type: "string",
                    name: "phone",
                    label: "Numéro de téléphone",
                },
                {
                    type: "string",
                    name: "email",
                    label: "E-mail",
                },
                {
                    type: "string",
                    name: "location",
                    label: "Adresse",
                },
            ],
        },
        {
            type: "object",
            name: "metadata",
            label: "Référencement",
            fields: [
                {
                    type: "string",
                    name: "meta_author",
                    label: "Auteur SEO",
                },
                {
                    type: "image",
                    name: "meta_image",
                    label: "Image SEO",
                },
                {
                    type: "string",
                    name: "meta_description",
                    label: "Description SEO",
                },
            ],
        },

    ] as TinaField[];
}
export function menuFields() {
    return [
        {
            type: "object",
            name: "main",
            label: "Menu du haut",
            list: true,
            ui: {   
                itemProps: (item) => {
                    return { label: `${item?.name} `}
                },
            },
            fields: [
                {
                    type: "string",
                    name: "name",
                    label: "Titre",
                },
                {
                    type: "string",
                    name: "url",
                    label: "Url Interne",
                },

            ],
        },
        {
            type: "object",
            name: "footer",
            label: "Menu du bas",
            list: true,
            ui: {
                itemProps: (item) => {
                  return { label: `${item?.name} `}
                },
            },
            fields: [
                {
                    type: "string",
                    name: "name",
                    label: "Titre",
                },
                {
                    type: "string",
                    name: "url",
                    label: "Url Interne",
                },

            ],
        },

    ] as TinaField[];
}
export function socialFields() {
    return [
        {
            type: "string",
            name: "facebook",
            label: "Lien facebook",
        },
        {
            type: "string",
            name: "twitter",
            label: "Lien twitter",
        },
        {
            type: "string",
            name: "linkedin",
            label: "Lien linkedin",
        },
        {
            type: "string",
            name: "pinterest",
            label: "Lien pinterest",
        },
        {
            type: "string",
            name: "instagram",
            label: "Lien instagram",
        },
        {
            type: "string",
            name: "youtube",
            label: "Lien youtube",
        },
        {
            type: "string",
            name: "email",
            label: "Lien email",
        },
        {
            type: "string",
            name: "phone",
            label: "Lien phone",
        },
        {
            type: "string",
            name: "address",
            label: "Lien address",
        },

    ] as TinaField[];
}
export function themeFields() {
    return [
        {
            type: "object",
            name: "colors",
            label: "Couleur du site",
            fields: [
                {
                    type: "object",
                    name: "default",
                    label: "Couleur par default du site",
                    fields: [
                        {
                            type: "object",
                            name: "theme_color",
                            label: "Couleur de thème",
                            fields: [
                                {
                                    type: "string",
                                    name: "primary",
                                    label: "Couleur de primaire",
                                    ui:{
                                        component: 'color'
                                    }
                                },
                                {
                                    type: "string",
                                    name: "body",
                                    label: "Couleur d'arrière plans",
                                    ui:{
                                        component: 'color'
                                    }
                                },
                                {
                                    type: "string",
                                    name: "header",
                                    label: "Couleur d'arrière plans header",
                                    ui:{
                                        component: 'color'
                                    }
                                },
                                {
                                    type: "string",
                                    name: "border",
                                    label: "Couleur de bordure",
                                    ui:{
                                        component: 'color'
                                    }
                                },
                                {
                                    type: "string",
                                    name: "border_secondary",
                                    label: "Couleur de bordure secondaire",
                                    ui:{
                                        component: 'color'
                                    }
                                },
                                {
                                    type: "string",
                                    name: "theme_light",
                                    label: "Couleur de thème clair",
                                    ui:{
                                        component: 'color'
                                    }
                                },
                                {
                                    type: "string",
                                    name: "theme_dark",
                                    label: "Couleur de thème foncée",
                                    ui:{
                                        component: 'color'
                                    }
                                },
                            ]
                        },
                        {
                            type: "object",
                            name: "text_color",
                            label: "Couleur des textes",
                            fields:[
                                {
                                    type: "string",
                                    name: "default",
                                    label: "Couleur de texte par default",
                                    ui:{
                                        component: 'color'
                                    }
                                },
                                {
                                    type: "string",
                                    name: "dark",
                                    label: "Couleur texte foncée",
                                    ui:{
                                        component: 'color'
                                    }
                                },
                                {
                                    type: "string",
                                    name: "light",
                                    label: "Couleur texte clair",
                                    ui:{
                                        component: 'color'
                                    }
                                },
                            ]
                        },
        
                    ],
                },
            ],
        },
        {
            type: "object",
            name: "fonts",
            label: "Polices",
            fields: [
                {
                    type: "object",
                    name: "font_family",
                    label: "Police",
                    fields: [
                        {
                            type: "string",
                            name: "primary",
                            label: "Police Primaire", 
                        },
                        {
                            type: "string",
                            name: "primary_type",
                            label: "Type de police Primaire", 
                        },                        {
                            type: "string",
                            name: "secondary",
                            label: "Police Secondaire", 
                        },
                        {
                            type: "string",
                            name: "secondary_type",
                            label: "Type de police Secondaire", 
                        }
                    ]

                },
                {
                    type: "object",
                    name: "font_size",
                    label: "Taille de Police",
                    fields:[
                        {
                            type: "string",
                            name: "base",
                            label: "Taille de base", 
                            ui:{
                                component: 'number',
                            }
                        },
                        {
                            type: "number",
                            name: "scale",
                            label: "Echelle de taille ",
                            description: "Par quels nombres on agrandit la taille de police de base pour un titre, ex: taille de base égale 16px, échelle égale 1.25 le plus petit titre h6 sera à la taille 16x1.25=20px et le titre un peu plus grand sera à la taille de h6 x échelle donc 20x1.25=25px et ainsi de suite. ", 
                        },                                
                    ]
                },

            ],
        },
    ] as TinaField[];
}