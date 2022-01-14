import { createStore } from 'redux';
import { notesReducer } from './redux/rootReducer';

// @ts-ignore
const store = createStore(notesReducer);

export default store;
