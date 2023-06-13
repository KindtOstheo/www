import type { TinaField } from "tinacms";

export function legalFields() {
    return [
        {
            type: "string",
            name: "title",
            label: "Titre",
        },
        {
            type: "string",
            name: "description",
            label: "Description",
        },
        {
            type: "boolean",
            name: "draft",
            label: "Brouillon",
        },
        {
            label: "Body",
            name: "body",
            isBody: true,
            type: "rich-text",
        }
        
    ] as TinaField[];
}