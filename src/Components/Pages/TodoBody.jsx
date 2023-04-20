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
    <Paper
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: "50px",
      }}
    >
      {allTodos.map((todo) => {
        return (
          <Paper
            style={{
              textAlign: "center",
              width: "60%",
              height: "30px",
              border: "1px solid black",
              borderRadius: "10px",
              margin: "10px",
              padding: "20px",
              fontWeight: "bold",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap : 1,
            }}
            key={todo.id}
          >
            {todo.todo}
            <DeleteIcon onClick={()=>handleDeleteTodo(todo.id)} sx={{cursor : "pointer"}} />
          </Paper>
        );
      })}
    </Paper>
  );
};

export default TodoBody;
