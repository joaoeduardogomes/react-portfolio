# João Eduardo Portfolio

## Hey, you found my portfolio!

This is the place where I put together a bit of who I am, what I build, and what I am learning as a web developer.

I wanted this project to feel personal, simple to explore, and easy to maintain. So besides being my portfolio website, it is also a project where I can practice building clean interfaces with React, Next.js, TypeScript, and Sass.

## What's in here

You will find pages about:

- who I am
- my education
- the technologies I work with
- my language and soft skills
- some projects I have built
- my hobbies and interests
- my experience
- a small FAQ

## Built with

![NextJS](https://img.shields.io/badge/NEXT.JS-%20?style=for-the-badge&logo=next.js&logoColor=white&color=black)
![React](https://img.shields.io/badge/REACT-%20?style=for-the-badge&logo=react&logoColor=white&color=%23149ECA)
![TypeScript](https://img.shields.io/badge/TYPESCRIPT-%20?style=for-the-badge&logo=typescript&logoColor=white&color=%232F74BF)
![Sass](https://img.shields.io/badge/SASS-%20?style=for-the-badge&logo=sass&logoColor=white&color=%23CF649B)

## A few highlights

- Responsive multi-page layout
- Reusable data-driven content
- Project cards with code and live demo links
- Route metadata for titles and descriptions
- Component-scoped styling with SCSS Modules

## Project structure

```text
src/
  app/
    components/     # Shared UI like navigation and social links
    education/      # Education page
    experience/     # Experience page
    faq/            # FAQ page
    hobbies/        # Hobbies page
    projects/       # Projects page
    skills/         # Skills page
    stack/          # Stack page
    globals.scss    # Global styles
    layout.tsx      # Root layout
    page.tsx        # Home / About page
  data/             # Portfolio content
  styles/           # Shared Sass variables and breakpoints
public/
  images/           # Avatars, icons, and project thumbnails
```

## Running locally

If you want to explore or tweak the project on your machine:

```bash
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

## Available scripts

- `npm run dev` starts the development server
- `npm run build` creates the production build
- `npm run start` runs the production version
- `npm run lint` runs ESLint

## Want to customize it?

Most of the content lives in `src/data/`, so it is pretty easy to update things like:

- projects
- education
- experience
- stack items
- FAQ entries

You can also swap images and icons inside `public/images/`.

## License

This project is available under the terms of the [MIT License](LICENSE).
