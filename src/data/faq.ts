export type FaqItem = {
    id: string;
    question: string;
    answer: string;
}

export const faqData: FaqItem[] = [
    {
        id: "roles-looking-for",
        question: "What kind of roles are you looking for?",
        answer: "Internship and junior roles in back-end, full-stack, or front-end development."
    },
    {
        id: "frontend-or-backend",
        question: "Are you more front-end or back-end?",
        answer: "I work as a full-stack developer, with preference for back-end development."
    },
    {
        id: "professional-experience",
        question: "Do you have professional experience?",
        answer: "I don’t have formal industry experience yet, but I’ve built personal projects and contributed as a volunteer translator at freeCodeCamp."
    },
    {
        id: "view-code",
        question: "Can I see your code?",
        answer: "Yes. All projects listed here link directly to their repositories with documented code."
    },
    {
        id: "learning-new-technologies",
        question: "Are you open to learning new technologies?",
        answer: "Yes. I’m comfortable learning new tools when the project requires it."
    },
    {
        id: "location",
        question: "Where are you based?",
        answer: "Based in Brazil. Open to remote work and future relocation."
    }
];
