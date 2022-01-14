import { Action } from './actions';
import { Category, Note, NoteStatus } from '../types';

export interface NotesState {
    notes: Note[];
}

const initialState = {
    notes: [
        {
            id: 5681,
            name: 'Alex',
            created: '12.01.2022',
            category: Category.Quote,
            status: NoteStatus.Active,
            content: 'Lorem Ipsum',
            dates: '3/5/2021, 5/6/2020'
        },
        {
            id: 3626,
            name: 'Alex',
            created: '12.01.2022',
            category: Category.Task,
            status: NoteStatus.Active,
            content: 'Lorem Ipsum',
            dates: '3/5/2021, 5/6/2020'
        }
    ]
};

// eslint-disable-next-line import/prefer-default-export
export const notesReducer = (state: NotesState = initialState, action: Action) => {
    switch (action.type) {
        case 'ADD_NOTE': {
            return { ...state, notes: [...state.notes, action.payload] };
        }
        case 'DELETE_NOTE': {
            const filteredNotes = state.notes.filter((elem: Note) => elem.id !== action.payload.id);
            return { ...state, notes: filteredNotes };
        }
        case 'CHANGE_NOTE': {
            const newNotes = state.notes.map((elem: Note) => {
                if (elem.id === action.payload.id) {
                    return { ...state.notes, ...action.payload };
                }
                return elem;
            });
            return { ...state, notes: newNotes };
        }
        default:
            return state;
    }
};
