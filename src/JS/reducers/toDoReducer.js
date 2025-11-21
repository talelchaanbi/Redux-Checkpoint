// NOTE: utilisation de chaînes pour éviter les imports manquants d'actionTypes
//Initial state
const initialState = {
  tasksArray: [
    {
      id: Date.now(),
      description: "Aller chez le médecin",
      isDone: false,
    },
    {
      id: Date.now() + 1,
      description: "Acheter Médicament",
      isDone: false,
    },
  ],
};
import { ADD_TASK, UPDATE_TASK, TOGGLE_DONE, REMOVE_TASK } from "../actionTypes/toDoActionType";

//Pure function
const toDoReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_TASK:
      return {
        ...state,
        tasksArray: [...state.tasksArray, payload],
      };

    case UPDATE_TASK:
      return {
        ...state,
        tasksArray: state.tasksArray.map(t =>
          t.id === payload.id ? { ...t, description: payload.description } : t
        ),
      };

    case TOGGLE_DONE:
      return {
        ...state,
        tasksArray: state.tasksArray.map(t =>
          t.id === payload.id ? { ...t, isDone: !t.isDone } : t
        ),
      };

    case REMOVE_TASK:
      return {
        ...state,
        tasksArray: state.tasksArray.filter(t => t.id !== payload.id),
      };

    default:
      return state;
  }
};
//Export
export default toDoReducer;