import { RowDataPacket } from "mysql2";
import { database } from "../../db";

export interface User {
    id: number;
    username: string;
    display_name: string;
    email: string;
    password_hash: string;
    role_id: number;
    created_at: string;
    status: number;
};

export interface Student {
    id: number;
    user_id: number;
    class_id: number;
};

export interface Staff {
    id: number;
    user_id: number;
};

export interface Status {

}

export interface Device {
    id: number;
    user_id: number;
    device_uuid: string;
    name: string;
    last_seen: string;
    status: "active" | "revoked" | "pending";
};

export interface UserPreference {
    id: number;
    user_id: number;

};

export function GetUser<TObject extends { user_id: number; }>(object: TObject): Promise<User> {
    return new Promise((resolve, reject) => {
        database.connection?.query<RowDataPacket[]>(`select * from users where id = ${object.user_id}`, (error, rows) => {
            if (rows.length === 0) reject(404);
            resolve(rows[0] as User);
        });
    });
}

export function ListUsers(): Promise<User[]> {
    return new Promise((resolve, reject) => {
        database.connection?.query<RowDataPacket[]>(`select * from users`, (error, rows) => {
            if (rows.length === 0) reject(404);
            resolve(rows as User[]);
        });
    });
}

export function TryLogin(username: string, password: string): Promise<User | null> {
    return new Promise(resolve => {
        database.connection?.prepare(`select * from users where username = ? and password = ?`, (error, statement) => {
            statement.execute<RowDataPacket[]>([username, password], (err, rows) => {
                if (rows.length === 0) resolve(null);

                resolve(rows[0] as User);
            });
            statement.close();
        });
    });
}

enum TableQueryType {
    Single,
    Multi
}

type UserToTable = {
    "students": [TableQueryType.Single, Student],
    "staff": [TableQueryType.Single, Staff],
    "user_preferences": [TableQueryType.Multi, UserPreference],
};

export function FromUser<TName extends keyof UserToTable,
    TIsArray = UserToTable[TName][0], 
    TResult = TIsArray extends TableQueryType.Multi
    ? UserToTable[TName][1][]
    : [UserToTable[TName][1]]>(table: TName, user: User): Promise<TResult> {
    return new Promise(resolve => {
        database.connection?.prepare(`select * from ${table} where user_id = ?`, (error, statement) => {
            statement.execute<RowDataPacket[]>([user.id], (err, rows) => {
                resolve(rows as TResult);
            });
            statement.close();
        });
    });
}

