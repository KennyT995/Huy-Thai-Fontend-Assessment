export class StudentModel {

    city: string;
    company: string;
    email: string;
    firstName: string;
    grades: Array<number>;
    id: number;
    lastName: string;
    pic: string;
    skill: string;
    tags: string[];

    constructor(student) {
        this.city = student.city;
        this.company = student.company;
        this.email = student.email;
        this.firstName = student.firstName;
        this.grades = student.grades;
        this.id = student.id;
        this.lastName = student.lastName;
        this.pic = student.pic;
        this.skill = student.skill;
        this.tags = [];
    };
}