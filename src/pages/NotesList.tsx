import React, { useState } from 'react';
import { Button } from 'reactstrap';
import { TableCaption } from '../components/table-caption/TableCaption';
import { NoteView } from '../components/note/NoteView';
import './NotesList.scss';
import { getRandomDigit } from '../helpers/utils';

export const NotesList = () => {
    const [note] = useState([{}, {}, {}]);

    const renderNotes = (arr: any) =>
        arr.map((elem: any) => {
            const id = getRandomDigit();
            return <NoteView key={id} entity={elem} />;
        });

    const notes = renderNotes(note);

    return (
        <div className="notes-container">
            <TableCaption />
            {notes}
            <Button color="primary">Add a note</Button>
        </div>
    );
};

export default NotesList;
