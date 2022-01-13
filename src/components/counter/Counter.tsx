import React, { useEffect, useState } from 'react';
import { Category, Note } from '../../types';

import './Counter.scss';

interface CounterProps {
    notesState: Note[];
}

interface CounterEntity {
    tasks: number;
    ideas: number;
    quotes: number;
    randoms: number;
}

export const Counter: React.FC<CounterProps> = ({ notesState }: CounterProps) => {
    const [counter, setCounter] = useState<CounterEntity>();

    useEffect(() => {
        const setUpCounter = () => {
            const counts = {
                tasks: 0,
                ideas: 0,
                quotes: 0,
                randoms: 0
            };

            notesState.forEach((elem) => {
                switch (elem.category) {
                    case Category.Task:
                        counts.tasks += 1;
                        break;
                    case Category.Quote:
                        counts.ideas += 1;
                        break;
                    case Category.Idea:
                        counts.quotes += 1;
                        break;
                    case Category.Random:
                        counts.randoms += 1;
                        break;
                    default:
                        break;
                }
            });

            setCounter(counts);
        };

        setUpCounter();
    }, [notesState]);

    return (
        <section className="counter">
            <div>{counter?.tasks}</div>
            <div>{counter?.ideas}</div>
            <div>{counter?.quotes}</div>
            <div>{counter?.randoms}</div>
        </section>
    );
};

export default Counter;
