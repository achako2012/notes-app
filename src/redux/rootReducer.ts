import { Action } from './actions';
import { Note, NoteCategory, NoteStatus } from '../types';
import { NoteActions } from './types';

export interface NotesState {
    notes: Note[];
}

const initialState = {
    notes: [
        {
            id: 5681,
            name: 'Alex',
            created: '12.01.2022',
            category: NoteCategory.Quote,
            status: NoteStatus.Active,
            content: 'Lorem Ipsum',
            dates: '3/5/2021, 5/6/2020'
        },
        {
            id: 3626,
            name: 'Alex',
            created: '12.01.2022',
            category: NoteCategory.Task,
            status: NoteStatus.Active,
            content: 'Lorem Ipsum',
            dates: '3/5/2021, 5/6/2020'
        }
    ]
};

export const notesReducer = (state: NotesState = initialState, action: Action) => {
    switch (action.type) {
        case NoteActions.ADD_NOTE: {
            return { ...state, notes: [...state.notes, action.payload] };
        }
        case NoteActions.DELETE_NOTE: {
            const filteredNotes = state.notes.filter((elem: Note) => elem.id !== action.payload.id);
            return { ...state, notes: filteredNotes };
        }
        case NoteActions.CHANGE_NOTE: {
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
