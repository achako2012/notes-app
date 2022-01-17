import { Note } from 'types';
import { NoteActions } from './types';

export type Action = { type: NoteActions; payload: Note };

export const addNote = (note: Note): Action => ({
    type: NoteActions.ADD_NOTE,
    payload: note
});

export const deleteNote = (note: Note): Action => ({
    type: NoteActions.DELETE_NOTE,
    payload: note
});

export const changeNote = (note: Note): Action => ({
    type: NoteActions.EDITE_NOTE,
    payload: note
});
