import React, { useState } from 'react';
import { Button } from 'reactstrap';
import { TableCaption } from '../components/table-caption/TableCaption';
import { NoteView } from '../components/note/NoteView';
import './NotesList.scss';
import { getRandomDigit } from '../helpers/utils';
import { Category, Note } from '../types';
import { Counter } from '../components/counter/Counter';

const initialState = [
    {
        id: 5681,
        name: 'Alex',
        created: '12.01.2022',
        category: Category.Quote,
        status: 'active',
        content: 'Lorem Ipsum',
        dates: '3/5/2021, 5/6/2020'
    },
    {
        id: 3626,
        name: 'Alex',
        created: '12.01.2022',
        category: Category.Task,
        status: 'active',
        content: 'Lorem Ipsum',
        dates: '3/5/2021, 5/6/2020'
    }
];

export const NotesPage = () => {
    const [notes, setNote] = useState<Note[]>(initialState);

    const changeNote = (entity: Note): void => {
        const newState = notes.map((elem: Note) => {
            if (elem.id === entity.id) {
                return { ...elem, ...entity };
            }
            return elem;
        });
        setNote(newState);
    };

    const deleteNote = (id: number) => {
        const filteredNotes = notes.filter((elem: Note) => elem.id !== id);

        setNote(filteredNotes);
    };

    const onAddNote = () => {
        const id = getRandomDigit();
        const emptyNote = {
            id,
            name: '',
            created: '',
            category: Category.Idea,
            status: 'active',
            content: '',
            dates: ''
        };
        setNote([...notes, emptyNote]);
    };

    const renderNotes = (arr: Note[]) =>
        arr.map((elem: Note) => {
            const id = getRandomDigit();
            return (
                <NoteView key={id} entity={elem} changeNote={changeNote} deleteNote={deleteNote} />
            );
        });

    return (
        <div className="notes-container">
            <Counter notesState={notes} />
            <TableCaption />
            {renderNotes(notes)}
            <Button color="primary" onClick={onAddNote}>
                Add a note
            </Button>
        </div>
    );
};

export default NotesPage;
