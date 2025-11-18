import { ADD_TASK } from "../actionTypes/toDoActionType";

//Initial state
const initialState = {
  tasksArray: [
    {
      id: Date.now(),
      description: "Aller chez le médecin",
      isDone: false,
    },
    {
      id: Date.now(),
      description: "Acheter Médicament",
      isDone: false,
    },
  ],
};

//Pure function
const toDoReducer = (state = initialState, {type,payload}) => {
    switch (type) { 
        case ADD_TASK:
            return {
                ...state,
                tasks: [...state.tasksArray, payload]
            }
    
        default:
            return state;
    }
}
//Export
export default toDoReducer;