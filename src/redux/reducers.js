import { createStore } from "redux";
import { addTodo, deleteTodo, updateTodo } from "./actions";
import { ADD_TODO, DELETE_TODO, UPDATE_TODO } from "./actions";



const initialState = []

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO:
            return [...state, action.payload]
        case DELETE_TODO:
            let newTodoss = [...state]
            newTodoss = newTodoss.filter(todo => todo.id != action.payload)
            return newTodoss;
        case UPDATE_TODO:
            let newTodos = [...state];
            let index = -1;
            for (let i = 0; i < newTodos.length; i++) {
                index++;
                if (newTodos[i].id == action.payload.id) {
                    break;
                }

            }
            if (index != -1) {
                newTodos[index] = action.payload;
                return newTodos;
            }

    }
    return state;
}
