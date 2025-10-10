import { RowDataPacket } from "mysql2";
import { database } from "../../db.js";

export interface Class {
    id: number;
    school_id: number;
    year_created: number;
    letter: string;
    educator_id: number;
    level: number;
};

export interface Subject {
    id: number;
    school_id: number;
    name: string;
    description: string;
};

export interface Grade {
    id: number;
    user_id: number;
    subject_id: number;
    teacher_id: number;
};

export interface Events {
    id: number;
    name: string;
    type_id: number;
    description: string;
    author: number;
    target_class: number;
};

export interface EventType {
    id: number;
    name: string;
};

export interface School {
    id: number;
    name: string;
    max_class_lvl: number;
};

export function ListSchools(): Promise<School[]> {
    return new Promise(resolve => {
        database.connection?.query<RowDataPacket[]>(`select * from school`, (err, rows) => {
            resolve(rows as School[]);
        });
    });
}