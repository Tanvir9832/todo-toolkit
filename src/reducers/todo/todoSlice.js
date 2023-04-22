import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    todos : [],
}

export const todoSlice = createSlice({
    name : "todo",
    initialState,
    reducers : {
        addTodos : (state,action)=>{
            if(action.payload.todo.trim()!==""){
                state.todos.push(action.payload);
            }
        },
        deleteTodo : (state,action)=>{
            
            state.todos = state.todos.filter(todo=> {
                console.log(todo.id);
                return todo.id !== action.payload
            });
        }
    }

})

export const {addTodos,deleteTodo} = todoSlice.actions;

export default todoSlice.reducer;