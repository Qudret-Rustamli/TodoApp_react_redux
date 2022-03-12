import { TextField } from '@mui/material'
import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { addTodo } from '../redux/actions'
import { useDispatch } from 'react-redux';


const TodoFormCont = styled.div`
    position:relative;  
    width:30%;
    color:black;
    margin:auto;
    display:flex;
    align-items:center;
    margin:30px auto;
`

const AddCircleIconConst = styled(AddCircleIcon)`
    position:absolute;      
    width:30%;
    font-size:30px !important;
    color:black;
    margin:auto;
    display:flex;
    align-items:center;
    margin:30px auto;
    right:10px;
    color:red;
    cursor:pointer;
`
const TodoForm = ({ todos, setTodos }) => {
    const dispatch = useDispatch(state => state)
    const [name, setName] = useState()
    const todoInp = useRef()

  
    localStorage.setItem('todos', JSON.stringify(todos))


    return (
        <TodoFormCont>
            <TextField
                value={name}
                fullWidth id="outlined-basic"
                placeholder='Add Task'
                style={{ backgroundColor: 'white',border:'none' }}
                label="Add Task"
                variant="outlined"
                inputRef={todoInp}
                onChange={(e)=>setName(e.target.value)}
            />
            <AddCircleIconConst
                onClick={() => {
                    if (name==='') return alert('Bu xana boş olmamalıdır!!!!!!!')
                    dispatch(addTodo({
                        id: Date.now(),
                        name: name
                    }));
                    setName('');
                }} />
        </TodoFormCont>
    )
}

export default TodoForm