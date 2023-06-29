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
            {
                type: "string",
                name: "a_title",
                label: "Alignement du Titre",
                options: [{
                    value: "center",
                    label: "Centre"
                  }, {
                    value: "end",
                    label: "Droite"
                  }, {
                    value: "start",
                    label: "Gauche"
                  }]
            },
            {
                label: "Taille Titre en px",
                name: "f_title",
                type: "number",
                ui:{
                    validate: (val)=>{
                        if(val <= 0 ) {
                            return 'Le nombre doit etre plus grand que 0'
                        }
                    }
                }
            }, 
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
                name: "a_title",
                label: "Alignement du Titre",
                options: [{
                    value: "center",
                    label: "Centre"
                  }, {
                    value: "end",
                    label: "Droite"
                  }, {
                    value: "start",
                    label: "Gauche"
                  }]
            },
            {
                label: "Taille Titre en px",
                name: "f_title",
                type: "number",
                ui:{
                    validate: (val)=>{
                        if(val <= 0 ) {
                            return 'Le nombre doit etre plus grand que 0'
                        }
                    }
                }
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
                label: "Taille Description en px",
                name: "f_description",
                type: "number",
                ui:{
                    validate: (val)=>{
                        if(val <= 0 ) {
                            return 'Le nombre doit etre plus grand que 0'
                        }
                    }
                }
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
                        type: "string",
                        name: "a_title",
                        label: "Alignement du Titre",
                        options: [{
                            value: "center",
                            label: "Centre"
                          }, {
                            value: "end",
                            label: "Droite"
                          }, {
                            value: "start",
                            label: "Gauche"
                          }]
                    },
                    {
                        label: "Taille Titre en px",
                        name: "f_title",
                        type: "number",
                        ui:{
                            validate: (val)=>{
                                if(val <= 0 ) {
                                    return 'Le nombre doit etre plus grand que 0'
                                }
                            }
                        }
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
                        type: "rich-text",
                        name: "content",
                        label: "Description",
                    },
                    {
                        label: "Taille Description en px",
                        name: "f_content",
                        type: "number",
                        ui:{
                            validate: (val)=>{
                                if(val <= 0 ) {
                                    return 'Le nombre doit etre plus grand que 0'
                                }
                            }
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
                        name: "a_title",
                        label: "Alignement du Titre",
                        options: [{
                            value: "center",
                            label: "Centre"
                          }, {
                            value: "end",
                            label: "Droite"
                          }, {
                            value: "start",
                            label: "Gauche"
                          }]
                    },
                    {
                        label: "Taille Titre en px",
                        name: "f_title",
                        type: "number",
                        ui:{
                            validate: (val)=>{
                                if(val <= 0 ) {
                                    return 'Le nombre doit etre plus grand que 0'
                                }
                            }
                        }
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
                        label: "Taille Description en px",
                        name: "f_description",
                        type: "number",
                        ui:{
                            validate: (val)=>{
                                if(val <= 0 ) {
                                    return 'Le nombre doit etre plus grand que 0'
                                }
                            }
                        }
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