import type { TinaField } from "tinacms";
export function indexFields() {
  return [
    {
        type: "object",
        name: "banner",
        label: "Baniere d'Accueil",
        fields: [
            {
                type: "boolean",
                name: "b_svg",
                label: "Activer image d'arrière-plan",
            },
            {
                type: "boolean",
                name: "b_title",
                label: "Activer titre",
            },
            {
                type: "string",
                name: "title",
                label: "Titre",
            },
            // {
            //     label: "Taille Titre",
            //     name: "f_title",
            //     type: "string",
            //     options: [{
            //       value: "text-sm",
            //       label: "S"
            //     }, {
            //       value: "text-base",
            //       label: "M"
            //     }, {
            //       value: "text-lg",
            //       label: "L"
            //     }, {
            //       value: "text-xl",
            //       label: "XL"
            //     }, {
            //       value: "text-2xl",
            //       label: "2XL"
            //     }, {
            //       value: "text-3xl",
            //       label: "3XL"
            //     }, {
            //       value: "text-4xl",
            //       label: "4XL"
            //     }]
            // }, 
            {
                type: "boolean",
                name: "b_image",
                label: "Activer image",
            },
            {
                type: "image",
                name: "image",
                label: "Image",
            },
            {
                type: "boolean",
                name: "b_link",
                label: "Activer Boutton",
            },
            {
                type: "object",
                name: "link",
                label: "Boutton",
                fields: [
                    {
                        type: "string",
                        name: "label",
                        label: "Texte",
                    },
                    {
                        type: "string",
                        name: "href",
                        label: "Lien",
                    },
                ]
            }
        ]
    },
    {
        type: "object",
        name: "features",
        label: "Section de Service",
        fields: [
            {
                type: "string",
                name: "title",
                label: "Titre",
            },
            {
                type: "string",
                name: "sub_title",
                label: "Sous Titre",
            },
            {
                type: "rich-text",
                name: "description",
                label: "Description",
            },
            {
                type: "object",
                name: "list",
                label: "Liste de Service",
                list: true,
                ui: {
                    itemProps: (item) => {
                    // Field values are accessed by title?.<Field name>
                        return { label: item?.title };
                    },
                },
                fields: [
                    {
                        type: "string",
                        name: "title",
                        label: "Titre",
                    },
                    {
                        type: "boolean",
                        name: "b_icon",
                        label: "Activer pour icon/ desactiver pour image",
                    },
                    {
                        type: "string",
                        name: "icon",
                        label: "Icon https://feathericons.com/",
                        description: "Pour choisir les icones aller sur https://feathericons.com/ et recuperer le titre de l'icone",
                    },
                    {
                        type: "image",
                        name: "image",
                        label: "Image 80x80",
                    },
                    {
                        type: "string",
                        name: "content",
                        label: "Description",
                        ui: {
                            component: "textarea",
                        }
                    },
                ]
            }
        ]
    },
    {
        type: "object",
        name: "speciality",
        label: "Section de Specialité",
        fields: [
            {
                type: "object",
                name: "list",
                label: "Liste",
                list: true,
                ui: {
                    itemProps: (item) => {
                    // Field values are accessed by title?.<Field name>
                        return { label: item?.title };
                    },
                },
                fields: [
                    {
                        type: "string",
                        name: "title",
                        label: "Titre",
                    },
                    {
                        type: "string",
                        name: "subtitle",
                        label: "Sous Titre",
                    },
                    {
                        type: "rich-text",
                        name: "description",
                        label: "Description",
                    },
                    {
                        type: "image",
                        name: "image",
                        label: "Image",
                    },
                ]
            },
        ],
    },
    
  ] as TinaField[];
}