export type StackItem =
    | "html"
    | "css"
    | "javascript"
    | "node"
    | "python"
    | "bootstrap"
    | "bulma"
    | "tailwind"
    | "sass"
    | "express"
    | "flask"
    | "react"
    | "next.js"
    | "postgres"
    | "mongodb"
    | "git"
    | "figma"
    | "vscode"

type StackSection = {
    title: string;
    items: StackItem[];
}

export const stackData: { sections: StackSection[] } = {
    "sections": [
        {
            "title": "Languages",
            "items": [
                "html", "css", "javascript", "node", "python"
            ]
        },
        {
            "title": "Frameworks & Libraries",
            "items": [
                "bootstrap", "bulma", "tailwind", "sass", "express", "flask", "react", "next.js"
            ]
        },
        {
            "title": "Databases",
            "items": [
                "postgres", "mongodb"
            ]
        },
        {
            "title": "Other Tools",
            "items": [
                "git", "figma", "vscode"
            ]
        }
    ]
}