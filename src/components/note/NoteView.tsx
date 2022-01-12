import React, { useEffect, useState } from 'react';
import './NoteView.scss';
import { GrArchive, GrEdit } from 'react-icons/gr';
import { AiOutlineDelete } from 'react-icons/ai';
import { Input } from 'reactstrap';
import { Note } from '../../types';

interface NoteProps {
    entity: Note;
}

export const NoteView: React.FC<NoteProps> = ({ entity }: NoteProps) => {
    const [isEditing, setEditing] = useState<boolean>(false);
    const [noteContent, setNoteContent] = useState<Note>();

    useEffect(() => {
        setNoteContent({ ...entity });

        if (Object.values(entity).includes('')) setEditing(true);
    }, [entity]);

    const onEdit = () => {
        setEditing(!isEditing);
    };

    const changeHandler = (event: { target: { name: string; value: string } }) => {
        if (noteContent)
            setNoteContent({ ...noteContent, [event.target.name]: event.target.value });
    };

    return (
        <section className="note">
            <div id="name">
                {!isEditing && noteContent ? (
                    <p>{noteContent.name}</p>
                ) : (
                    <Input type="text" name="name" placeholder="name" onChange={changeHandler} />
                )}
            </div>
            <div id="created">
                {!isEditing && noteContent ? (
                    <p>{noteContent.created}</p>
                ) : (
                    <Input
                        type="text"
                        name="created"
                        placeholder="created"
                        onChange={changeHandler}
                    />
                )}
            </div>
            <div id="category">
                {!isEditing && noteContent ? (
                    <p>{noteContent.category}</p>
                ) : (
                    <Input
                        type="text"
                        name="category"
                        placeholder="category"
                        onChange={changeHandler}
                    />
                )}
            </div>
            <div id="content">
                {!isEditing && noteContent ? (
                    <p>{noteContent.content}</p>
                ) : (
                    <Input
                        type="text"
                        name="content"
                        placeholder="content"
                        onChange={changeHandler}
                    />
                )}
            </div>
            <div id="dates">
                {!isEditing && noteContent ? (
                    <p>{noteContent.dates}</p>
                ) : (
                    <Input type="text" name="dates" placeholder="dates" onChange={changeHandler} />
                )}
            </div>
            <div id="icons" className="action-buttons">
                <GrEdit style={{ fontSize: '80%' }} onClick={onEdit} />
                <GrArchive style={{ fontSize: '80%' }} />
                <AiOutlineDelete />
            </div>
        </section>
    );
};

export default NoteView;
