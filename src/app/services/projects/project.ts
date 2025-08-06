export interface Project {
    id: number;
    type: string;
    name: string;
    img: string;
    descriptionEN: string;
    descriptionSP: string;
    technologies: {
        id: number;
        name: string;
        img: string;
    }[]
    links: {
        name: string;
        url: string;
    }[];
}

export class FinishedProjects implements Project {
    id: number;
    type: string;
    name: string;
    img: string;
    descriptionEN: string;
    descriptionSP: string;
    technologies: {
        id: number;
        name: string;
        img: string;
    }[];
    links: {
        name: string;
        url: string;
    }[];

    constructor(id: number, type: string, name: string, img: string, descriptionEN: string, descriptionSP: string, technologies: { id: number; name: string; img: string; }[], links: { name: string; url: string; }[]) {
        this.id = id;
        this.type = type;
        this.name = name;
        this.img = img;
        this.descriptionEN = descriptionEN;
        this.descriptionSP = descriptionSP;
        this.technologies = technologies;
        this.links = links;
    }
}

export class WorkingProjects implements Project {
    id: number;
    type: string;
    name: string;
    img: string;
    descriptionEN: string;
    descriptionSP: string;
    technologies: {
        id: number;
        name: string;
        img: string;
    }[];
    links: {
        name: string;
        url: string;
    }[];

    constructor(id: number, type: string, name: string, img: string, descriptionEN: string, descriptionSP: string, technologies: { id: number; name: string; img: string; }[], links: { name: string; url: string; }[]) {
        this.id = id;
        this.type = type;
        this.name = name;
        this.img = img;
        this.descriptionEN = descriptionEN;
        this.descriptionSP = descriptionSP;
        this.technologies = technologies;
        this.links = links;
    }
}