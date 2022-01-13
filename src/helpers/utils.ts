import { CategoryCounter, Note } from '../types';

export const getRandomDigit = () => Math.floor(Math.random() * 101 + 1);

export const countCategories = (arr: Note[], searchKey: string) => {
    const reducer = (accumulator: CategoryCounter, currentValue: Note) => {
        if (currentValue.category === searchKey) {
            if (currentValue.status === 'active') {
                accumulator.active += 1;
            } else {
                accumulator.archived += 1;
            }
        }
        return accumulator;
    };

    return arr.reduce(reducer, { active: 0, archived: 0 });
};
