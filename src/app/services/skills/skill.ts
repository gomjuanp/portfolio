export interface Skills {
    id: number;
    name: string;
    img: string;
}
export class StrongSkills implements Skills {
    id: number;
    name: string;
    img: string;
    constructor(id: number, name: string, img: string) {
        this.id = id;
        this.name = name;
        this.img = img;
    }
}

export class LearningSkills implements Skills {
    id: number;
    name: string;
    img: string;
    constructor(id: number, name: string, img: string) {
        this.id = id;
        this.name = name;
        this.img = img;
    }
}