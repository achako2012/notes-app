export interface Note {
    id: number;
    name: string;
    created: string;
    category: string;
    content: string;
    dates: string;
}

export enum Category {
    Task = 'Task',
    Idea = 'Idea',
    Quote = 'Quote',
    Random = 'Random Thought'
}
