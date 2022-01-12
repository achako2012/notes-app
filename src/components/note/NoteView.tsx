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
    const [isEditing, setEditing] = useState(false);
    const [noteContent, setNoteContent] = useState<Note>({
        category: '',
        content: '',
        created: '',
        dates: '',
        name: ''
    });

    useEffect(() => {
        if (Object.keys(entity).length > 0) {
            setNoteContent({ ...entity });
        } else {
            setEditing(true);
        }
    }, [entity]);

    const onEdit = () => {
        setEditing(!isEditing);
    };

    const changeHandler = (event: { target: { name: string; value: string } }) => {
        setNoteContent({ ...noteContent, [event.target.name]: event.target.value });
    };

    return (
        <section className="note">
            <div id="name">
                {!isEditing ? (
                    <p>{noteContent.name}</p>
                ) : (
                    <Input type="text" name="name" placeholder="name" onChange={changeHandler} />
                )}
            </div>
            <div id="created">
                {!isEditing ? (
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
                {!isEditing ? (
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
                {!isEditing ? (
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
                {!isEditing ? (
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
