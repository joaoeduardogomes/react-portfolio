export type Course = {
    name: string;
    institution: string;
    id: string;
}

export type EducationSection = {
    title: string;
    items: Course[];
}

export type EducationData = {
    sections: EducationSection[];
}