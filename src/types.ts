export interface Note {
    id: number;
    name: string;
    created: string;
    category: string;
    status: string;
    content: string;
    dates: string;
}

export enum Category {
    Task = 'Task',
    Idea = 'Idea',
    Quote = 'Quote',
    Random = 'Random Thought'
}

export interface CategoryCounter {
    active: number;
    archived: number;
}
