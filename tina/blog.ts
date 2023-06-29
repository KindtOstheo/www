import type { TinaField } from "tinacms";

export function blogFields() {
    return [
        {
            type: "string",
            name: "title",
            label: "Titre",
        },
        {
            type: "image",
            name: "image",
            label: "Image",
        },
        {
            type: "object",
            name: "author",
            label: "Auteur",
            fields:[
                {
                    type: "string",
                    name: "name",
                    label: "Nom",
                },
                {
                    type: "image",
                    name: "avatar",
                    label: "Avatar",
                },
            ]
        },
        {
            type: "boolean",
            name: "draft",
            label: "Brouillon",
        },
        {
            label: "Date de parution",
            name: "date",
            type: "datetime",
            ui: {
                validate: (value)=>{
                    if(value){
                        return 'La date doit etre valide'
                    }
                }
            }
        },
        {
            label: "Body",
            name: "body",
            isBody: true,
            type: "rich-text",
            templates: [
                {
                    name: "Blockquote",
                    label: "Citation",
                    fields:[
                        {
                            name: "name",
                            label: "Nom de l'auteur",
                            type: "string"
                        },
                        {
                            name: "children",
                            label: "Texte de la citation",
                            type: "rich-text"
                        },
                    ]
                },
                {
                    name: "Youtube",
                    label: "Video Youtube",
                    fields:[
                        {
                            name: "id",
                            label: "Id de la video",
                            type: "string",
                            ui: {
                                description: "Récupérer le lien de la vidéo sur YouTube https://www.youtube.com/watch?v=AnuHskLUPL0 et récupérer l'id exemple avec ce lien l'id est AnuHskLUPL0"
                            }
                        },
                        {
                            name: "title",
                            label: "Titre de la video",
                            type: "string",
                        },
                    ]
                },
                {
                    name: "Button",
                    label: "Bouton",
                    fields:[
                        {
                            name: "href",
                            label: "Lien",
                            type: "string"
                        },
                        {
                            name: "type",
                            label: "Type de Bouton",
                            type: "string",
                            options: [{
                                value: "outline",
                                label: "Squelette"
                              }, {
                                value: "primary",
                                label: "Entier"
                              }]
                        },
                        {
                            name: "rel",
                            label: "Référencement de Bouton",
                            type: "string",
                            options: [{
                                value: "follow",
                                label: "Référencer"
                              }, {
                                value: "",
                                label: "Non Référencer"
                              }]
                        },
                        {
                            name: "children",
                            label: "Texte",
                            type: "rich-text"
                        },
                    ]
                }
            ]
    
        }
        
    ] as TinaField[];
}