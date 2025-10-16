export interface Language {
    id: number;
    code: string;
    name: string;
};

export interface Translation {
    id: number;
    language_id: number;
    entity_type: string;
    entity_id: number;
    field: string;
    text: string;
};