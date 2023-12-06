export interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience: number;
    location: string;
    // possibility to add any attribute:
    [index: string]: any;
}

export interface Director extends Teacher {
    numberOfReports: number;
}

export function printTeacher(firstName: string, lastName:string) {
    return `${firstName[0]} ${lastName}`
}

export interface printTeacherFunction {
    (firstName: string, lastName: string): string;
}


export interface IStudentClassConstructor {
    new(firstName: string, lastName: string): IStudentClass;
}

export interface IStudentClass {
    workOnHomework(): string;
    displayName(): string;
}

export class StudentClass implements IStudentClass {
    
    private _lastName!: string;
    private _firstName!: string;

    constructor(firstName: string, lastName: string) {
        this._lastName = lastName;
        this._firstName = firstName;
    }

    workOnHomework() {
        return 'Currently working'
    }

    displayName() {
        return this._firstName
    }
}