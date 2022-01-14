import { Note } from '../types';

export type Action = { type: 'ADD_NOTE' | 'DELETE_NOTE' | 'CHANGE_NOTE'; payload: Note };

export const addNote = (note: Note): Action => ({
    type: 'ADD_NOTE',
    payload: note
});

export const deleteNote = (note: Note): Action => ({
    type: 'DELETE_NOTE',
    payload: note
});

export const changeNote = (note: Note): Action => ({
    type: 'CHANGE_NOTE',
    payload: note
});
