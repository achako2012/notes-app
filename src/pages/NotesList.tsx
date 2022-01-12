import React, { useState } from 'react';
import { Button } from 'reactstrap';
import { TableCaption } from '../components/table-caption/TableCaption';
import { NoteView } from '../components/note/NoteView';
import './NotesList.scss';
import { getRandomDigit } from '../helpers/utils';
import { Note } from '../types';

const initialState = [
    {
        name: 'Alex',
        created: '12.01.2022',
        category: 'Task',
        content: 'Lorem Ipsum',
        dates: '3/5/2021, 5/6/2020'
    },
    {
        name: 'Alex',
        created: '12.01.2022',
        category: 'Task',
        content: 'Lorem Ipsum',
        dates: '3/5/2021, 5/6/2020'
    }
];

export const NotesList = () => {
    const [note, setNote] = useState<Note[]>(initialState);

    const renderNotes = (arr: any) =>
        arr.map((elem: any) => {
            const id = getRandomDigit();
            return <NoteView key={id} entity={elem} />;
        });

    const notes = renderNotes(note);

    const onAddNote = () => {
        const emptyNote = {
            name: '',
            created: '',
            category: '',
            content: '',
            dates: ''
        };
        setNote([...note, emptyNote]);
    };

    return (
        <div className="notes-container">
            <TableCaption />
            {notes}
            <Button color="primary" onClick={onAddNote}>
                Add a note
            </Button>
        </div>
    );
};

export default NotesList;
