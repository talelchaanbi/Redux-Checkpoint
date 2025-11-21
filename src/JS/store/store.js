import { createStore, combineReducers } from 'redux';
import toDoReducer from '../reducers/toDoReducer.js';

const rootReducer = combineReducers({
  toDoReducer
});

// simple store without external devtools import (évite l'erreur d'import manquant)
const store = createStore(rootReducer);

export default store;
