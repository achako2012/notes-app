import React, { useState } from 'react';
import { Button } from 'reactstrap';
import { TableCaption } from '../components/table-caption/TableCaption';
import { NoteView } from '../components/note/NoteView';
import './NotesList.scss';
import { getRandomDigit } from '../helpers/utils';
import { Category, Note } from '../types';

const initialState = [
    {
        id: 5681,
        name: 'Alex',
        created: '12.01.2022',
        category: Category.Quote,
        content: 'Lorem Ipsum',
        dates: '3/5/2021, 5/6/2020'
    },
    {
        id: 3626,
        name: 'Alex',
        created: '12.01.2022',
        category: Category.Task,
        content: 'Lorem Ipsum',
        dates: '3/5/2021, 5/6/2020'
    }
];

export const NotesList = () => {
    const [note, setNote] = useState<Note[]>(initialState);

    const changeNote = (entity: Note): void => {
        const newState = note.map((elem) => {
            if (elem.id === entity.id) {
                return { ...elem, ...entity };
            }
            return elem;
        });
        setNote(newState);
    };

    const deleteNote = (id: number) => {
        const filteredNotes = note.filter((elem) => elem.id !== id);

        setNote(filteredNotes);
    };

    const renderNotes = (arr: Note[]) =>
        arr.map((elem: Note) => {
            const id = getRandomDigit();
            return (
                <NoteView key={id} entity={elem} changeNote={changeNote} deleteNote={deleteNote} />
            );
        });

    const onAddNote = () => {
        const id = getRandomDigit();
        const emptyNote = {
            id,
            name: '',
            created: '',
            category: Category.Idea,
            content: '',
            dates: ''
        };
        setNote([...note, emptyNote]);
    };

    return (
        <div className="notes-container">
            <TableCaption />
            {renderNotes(note)}
            <Button color="primary" onClick={onAddNote}>
                Add a note
            </Button>
        </div>
    );
};

export default NotesList;
