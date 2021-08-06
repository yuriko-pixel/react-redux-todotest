import { combineReducers, createSlice } from '@reduxjs/toolkit'

const initialState = {
    count: 0,
    todo: []
}

const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addTodo: (state, action) => {
            state.todo.push({id: state.count++, text: action.payload, completed: false})
        },
        deleteTodo: (state, action) => {
            const index = state.todo.findIndex(i => i.id === action.payload);
            if(index !== -1) {
                    state.todo.splice(index,1);
            }
        },
        completeTodo: (state, action) => {
            const todo = state.todo.find(i => i.id === action.payload);
            if(todo !== undefined) {
                todo.completed = !todo.completed;
            }
        }
    }
})

export const selectTodo = state => state.todo;

export const rootReducer = combineReducers({todo: todoSlice.reducer})
export const {addTodo, deleteTodo, completeTodo} = todoSlice.actions;
export default todoSlice.reducer;