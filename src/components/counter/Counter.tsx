import React, { useEffect, useState } from 'react';
import { CategoryCounter, Note, NoteCategory } from 'types';
import { countCategories, getRandomDigit } from 'helpers/utils';
import './Counter.scss';

interface CounterProps {
    notesState: Note[];
}

interface CounterEntity {
    [key: string]: CategoryCounter;
}

export const Counter: React.FC<CounterProps> = ({ notesState }: CounterProps) => {
    const [counter, setCounter] = useState<CounterEntity[]>();

    useEffect(() => {
        const setUpCounter = () => {
            const arr = [];
            arr.push({ [NoteCategory.Task]: countCategories(notesState, NoteCategory.Task) });
            arr.push({ [NoteCategory.Idea]: countCategories(notesState, NoteCategory.Idea) });
            arr.push({ [NoteCategory.Quote]: countCategories(notesState, NoteCategory.Quote) });
            arr.push({ [NoteCategory.Random]: countCategories(notesState, NoteCategory.Random) });

            setCounter(arr);
        };

        setUpCounter();
    }, [notesState]);

    const renderCards = (arr: CounterEntity[]) =>
        arr.map((elem) => {
            const id = getRandomDigit();
            const { active, archived } = elem[Object.keys(elem)[0]];
            return (
                <div className="card" key={id}>
                    <div className="card-title">{`${Object.keys(elem)[0]}'s`}</div>
                    <div className="card-content">
                        <p>Total:</p>
                        <p>{active + archived}</p>
                        <p>Achieved:</p>
                        <p>{archived}</p>
                    </div>
                </div>
            );
        });

    const cards = counter ? renderCards(counter) : null;

    return <div className="cards-wrapper">{cards}</div>;
};

export default Counter;
