import { IStudent } from "../interfaces/student";

function getLastId(students:IStudent[]): number {
    let item = students[students.length - 1];
    return item.id + 1;
}

export default getLastId;