import { StackItem } from "./stack";

export type ProjectItem = {
    id: string;
    name: string;
    imageUrl: string;
    codeLink: string;
    demoLink: string;
    technologies: StackItem[];
}

export const projectsData: ProjectItem[] = [
        {
            "id": "blog-savepoint",
            "name": "Blog Savepoint",
            "imageUrl": "/images/projects/blog-savepoint.png",
            "codeLink": "https://github.com/joaoeduardogomes/react-blog-savepoint",
            "demoLink": "https://savepoint-teal.vercel.app/",
            "technologies": [
                "css", "javascript", "bootstrap", "react", "next.js"
            ]
        },
    ]
