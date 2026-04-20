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
        {
            id: "onebitx",
            name: "OneBitX",
            imageUrl: "/images/projects/onebitx.png",
            codeLink: "https://github.com/joaoeduardogomes/desafio-onebitx",
            demoLink: "https://joaoeduardogomes.github.io/desafio-onebitx/",
            technologies: [
                "html", "css", "bootstrap", "sass"
            ]
        },
        {
            id: "students-grades",
            name: "Student's Grades",
            imageUrl: "/images/projects/students-grades.png",
            codeLink: "https://github.com/joaoeduardogomes/students_grades",
            demoLink: "https://students-grades-1imn.onrender.com/",
            technologies: [
                "html", "bootstrap", "python", "flask", "pandas"
            ]
        },
        {
            id: "pkmn-memory-game",
            name: "Pokémon Memory Game",
            imageUrl: "/images/projects/pkmn-memory-game.png",
            codeLink: "https://github.com/joaoeduardogomes/project-pokemon-memory-game",
            demoLink: "https://joaoeduardogomes.github.io/project-pokemon-memory-game/",
            technologies: [
                "html", "css", "javascript"
            ]
        },
        {
            id: "game-prices-scrapper",
            name: "Game Prices Scrapper",
            imageUrl: "/images/projects/games-scrapper-wishlist.png",
            codeLink: "https://github.com/joaoeduardogomes/game_prices_scrapper",
            demoLink: "https://psn-personal-wishlist.onrender.com/",
            technologies: [
                "html", "css", "javascript", "express", "mongodb"
            ]
        },
        {
            id: "portfolio",
            name: "This portfolio website!",
            imageUrl: "/images/projects/portfolio.png",
            codeLink: "https://github.com/joaoeduardogomes/react-portfolio",
            demoLink: "/",
            technologies: [
                "html", "sass", "typescript", "react", "next.js"
            ]
        },
    ]
