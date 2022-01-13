import React, { useEffect, useState } from 'react';
import { Button, UncontrolledCollapse } from 'reactstrap';
import { TableCaption } from '../components/table-caption/TableCaption';
import { NoteView } from '../components/note/NoteView';
import './NotesList.scss';
import { getRandomDigit } from '../helpers/utils';
import { Category, Note, NoteStatus } from '../types';
import { Counter } from '../components/counter/Counter';

const initialState = [
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
];

export const NotesPage = () => {
    const [notes, setNote] = useState<Note[]>(initialState);
    const [activeNotes, setActiveNotes] = useState<Note[]>();
    const [archivedNotes, setArchivedNotes] = useState<Note[]>();

    useEffect(() => {
        setActiveNotes(notes.filter((elem) => elem.status === NoteStatus.Active));
        setArchivedNotes(notes.filter((elem) => elem.status === NoteStatus.Archived));
    }, [notes]);

    const changeNote = (entity: Note): void => {
        console.log(entity);
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
            status: NoteStatus.Active,
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
            {activeNotes ? renderNotes(activeNotes) : <p>There are not active notes</p>}
            <div className="control-buttons">
                <Button className="view-archived-btn" color="primary" id="toggler">
                    Archived notes
                </Button>
                <Button id="add-note-btn" color="primary" onClick={onAddNote}>
                    New note
                </Button>
            </div>
            <div className="collapsed-content">
                <UncontrolledCollapse toggler="#toggler">
                    {archivedNotes && archivedNotes.length > 0 ? (
                        renderNotes(archivedNotes)
                    ) : (
                        <p>Opps you don&apos;t have archived notes</p>
                    )}
                </UncontrolledCollapse>
            </div>
        </div>
    );
};

export default NotesPage;
