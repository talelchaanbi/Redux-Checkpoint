import { ADD_TASK } from '../actionTypes/toDoActionType';

export const addTask= (newTask) => {
    return {
        type: ADD_TASK,
        payload: newTask
    }
}
