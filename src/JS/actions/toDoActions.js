import { ADD_TASK, UPDATE_TASK, TOGGLE_DONE, REMOVE_TASK } from '../actionTypes/toDoActionType';

export const addTask = (newTask) => ({
    type: ADD_TASK,
    payload: newTask,
});

// Additional action creators for update, toggle and remove
export const updateTask = (updated) => ({
    type: UPDATE_TASK,
    payload: updated,
});

export const toggleDone = (id) => ({
    type: TOGGLE_DONE,
    payload: { id },
});

export const removeTask = (id) => ({
    type: REMOVE_TASK,
    payload: { id },
});
