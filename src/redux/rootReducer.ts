import { Action } from './actions';
import { Note, NoteCategory, NoteStatus } from '../types';
import { NoteActions } from './types';

export interface NotesState {
    notes: Note[];
}

const initialState = {
    notes: [
        {
            id: 6346,
            name: 'Alex',
            created: '12.01.2022',
            category: NoteCategory.Quote,
            status: NoteStatus.Active,
            content: 'Lorem Ipsum',
            dates: '3/5/2021, 5/6/2020'
        },
        {
            id: 2874,
            name: 'Volodya',
            created: '12.01.2022',
            category: NoteCategory.Task,
            status: NoteStatus.Archived,
            content: 'Lorem Ipsum',
            dates: '3/5/2021, 5/6/2020'
        },
        {
            id: 2903,
            name: 'Volodya',
            created: '12.01.2022',
            category: NoteCategory.Idea,
            status: NoteStatus.Active,
            content: 'Lorem Ipsum',
            dates: '3/5/2021, 5/6/2020'
        },
        {
            id: 5691,
            name: 'Alex',
            created: '12.01.2022',
            category: NoteCategory.Task,
            status: NoteStatus.Active,
            content: 'Lorem Ipsum',
            dates: '3/5/2021, 5/6/2020'
        },
        {
            id: 3512,
            name: 'Viktor',
            created: '12.01.2022',
            category: NoteCategory.Random,
            status: NoteStatus.Archived,
            content: 'Lorem Ipsum',
            dates: '3/5/2021, 5/6/2020'
        },
        {
            id: 7490,
            name: 'Marek',
            created: '12.01.2022',
            category: NoteCategory.Idea,
            status: NoteStatus.Active,
            content: 'Lorem Ipsum',
            dates: '3/5/2021, 5/6/2020'
        },
        {
            id: 2396,
            name: 'Alex',
            created: '12.01.2022',
            category: NoteCategory.Quote,
            status: NoteStatus.Active,
            content: 'Lorem Ipsum',
            dates: '3/5/2021, 5/6/2020'
        },
        {
            id: 5191,
            name: 'Marek',
            created: '12.01.2022',
            category: NoteCategory.Random,
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
        case NoteActions.EDITE_NOTE: {
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
