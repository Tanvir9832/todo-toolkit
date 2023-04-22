import {  Paper } from '@mui/material'
import Header from './Pages/Header'
import TodoInput from './Pages/TodoInput'
import TodoBody from './Pages/TodoBody'
const Todo = () => {
  return (
    <Paper  sx={{width : "100%" , height : "98vh" , boxSizing : "border-box" , backgroundColor : "customTheme.superDark" }}>
        <Header />
        <TodoInput />
        <div style={{display : "flex" ,overflow : "scroll", marginTop : "50px", scrollBehavior : "auto"}}>
          <TodoBody />
        </div>
    </Paper>
  )
}

export default Todo