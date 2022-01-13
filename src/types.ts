export interface Note {
    id: number;
    name: string;
    created: string;
    category: string;
    status: NoteStatus;
    content: string;
    dates: string;
}

export enum Category {
    Task = 'Task',
    Idea = 'Idea',
    Quote = 'Quote',
    Random = 'Random Thought'
}

export enum NoteStatus {
    Active = 'active',
    Archived = 'archived'
}

export interface CategoryCounter {
    active: number;
    archived: number;
}
