import React, { useEffect, useState } from 'react';
import './NoteView.scss';
import { GrArchive, GrEdit } from 'react-icons/gr';
import { AiOutlineDelete, AiOutlineSave } from 'react-icons/ai';
import { Input } from 'reactstrap';
import { Category, Note } from '../../types';

interface NoteProps {
    entity: Note;

    changeNote(entity: Note): void;

    deleteNote(id: number): void;
}

export const NoteView: React.FC<NoteProps> = ({ entity, changeNote, deleteNote }: NoteProps) => {
    const [isEditing, setEditing] = useState<boolean>(false);
    const [noteContent, setNoteContent] = useState<Note>();

    useEffect(() => {
        setNoteContent({ ...entity });

        if (Object.values(entity).includes('')) setEditing(true);
    }, [entity]);

    const onEdit = () => {
        setEditing(!isEditing);
    };

    const changeNoteHandler = () => {
        if (noteContent) {
            if (!Object.values(noteContent).includes('')) {
                changeNote(noteContent);
            }
        }
    };

    const changeHandler = (event: { target: { name: string; value: string } }) => {
        if (noteContent)
            setNoteContent({ ...noteContent, [event.target.name]: event.target.value });
    };

    const renderStaticView = () => (
        <>
            <div id="name">
                <p>{noteContent?.name}</p>
            </div>
            <div id="created">
                <p>{noteContent?.created}</p>
            </div>
            <div id="category">
                <p>{noteContent?.category}</p>
            </div>
            <div id="content">
                <p>{noteContent?.content}</p>
            </div>
            <div id="dates">
                <p>{noteContent?.dates}</p>
            </div>
        </>
    );

    const renderInputsView = () => (
        <>
            <div id="name">
                <Input
                    type="text"
                    name="name"
                    placeholder={noteContent?.name || 'name'}
                    onChange={changeHandler}
                />
            </div>
            <div id="created">
                <Input type="text" name="created" placeholder="created" onChange={changeHandler} />
            </div>
            <div id="category">
                <Input name="category" type="select" onChange={changeHandler}>
                    <option>{Category.Idea}</option>
                    <option>{Category.Task}</option>
                    <option>{Category.Quote}</option>
                    <option>{Category.Random}</option>
                </Input>
            </div>
            <div id="content">
                <Input
                    type="text"
                    name="content"
                    placeholder={noteContent?.content || 'content'}
                    onChange={changeHandler}
                />
            </div>
            <div id="dates">
                <Input
                    type="text"
                    name="dates"
                    placeholder={noteContent?.dates || 'dates'}
                    onChange={changeHandler}
                />
            </div>
        </>
    );

    return (
        <section className="note">
            {isEditing ? renderInputsView() : renderStaticView()}
            <div id="icons" className="action-buttons">
                {isEditing ? (
                    <AiOutlineSave onClick={changeNoteHandler} />
                ) : (
                    <GrEdit style={{ fontSize: '80%' }} onClick={onEdit} />
                )}
                <GrArchive style={{ fontSize: '80%' }} />
                <AiOutlineDelete onClick={() => deleteNote(entity.id)} />
            </div>
        </section>
    );
};

export default NoteView;
