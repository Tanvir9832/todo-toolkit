import DeleteIcon from '@mui/icons-material/Delete';
import { Paper } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo } from '../../reducers/todo/todoSlice';

const TodoBody = () => {

  const dispatch = useDispatch();
  const handleDeleteTodo =(id)=>{
    dispatch(deleteTodo(id));
  }
  const allTodos = useSelector((state) => state.todos.todos);
  return (
    <>
      {allTodos.map((todo) => {
        return (
          <Paper
            style={{
              textAlign: "center",
              width: "60%",
              height: "100px",
              border: "1px solid black",
              borderRadius: "10px",
              margin: "10px",
              padding: "50px",
              fontWeight: "bold",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
            key={todo.id}
          >
            {todo.todo}
            <DeleteIcon onClick={()=>handleDeleteTodo(todo.id)} sx={{cursor : "pointer"}} />
          </Paper>
        );
      })}
    </>
  );
};

export default TodoBody;
