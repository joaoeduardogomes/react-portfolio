export type ExperienceItem = {
    id: string;
    startDate: string;
    endDate: string | null;
    role: string;
    organization: string;
    summary: string;
}

export const experienceData: ExperienceItem[] = [
    {
        "id": "freecodecamp-translator",
        "startDate": "Mar 2023",
        "endDate": "Sep 2025",
        "role": "Volunteer Translator",
        "organization": "freeCodeCamp",
        "summary": "I provided volunteer translations with a focus on bridging the language gap in the programming community. Offering high-quality translations of programming-related articles and technical content from English to Brazilian Portuguese. Committed to fostering accessibility and knowledge sharing for Portuguese-speaking developers and enthusiasts."
    },
]