import { configureStore } from "@reduxjs/toolkit";
import todoreducer from './reducers/todo/todoSlice'

export const store = configureStore({
    reducer : {
        todos : todoreducer,
    }
})