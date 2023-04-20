import { useState } from 'react';
import {MyTextField ,MyButton } from '../../styles/customComponents';
import {df} from '../../styles/css';
import { useDispatch } from 'react-redux';
import { addTodos } from '../../reducers/todo/todoSlice';


const TodoInput = () => {

  const dispatch = useDispatch();

  const [todo ,setTodos] = useState("");

  const handleTodos =(e)=>{
    e.preventDefault();
    const obj ={
      id : Date.now(),
      todo
    }
    dispatch(addTodos(obj));
    setTodos("");
  }
  return (
    <form onSubmit={handleTodos} style={df}>
        <MyTextField value={todo} onChange={(e)=>setTodos(e.target.value)}  />
        <MyButton type='submit' >ADD</MyButton>
    </form>
  )
}

export default TodoInput