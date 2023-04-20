import {  Paper } from '@mui/material'
import Header from './Pages/Header'
import TodoInput from './Pages/TodoInput'
import TodoBody from './Pages/TodoBody'
const Todo = () => {
  return (
    <Paper  sx={{width : "100%" , height : "98vh" }}>
        <Header />
        <TodoInput />
        <TodoBody />
    </Paper>
  )
}

export default Todo