import React, { useState } from 'react'
import styled from 'styled-components'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { motion } from "framer-motion"
import ModeEditOutlineTwoToneIcon from '@mui/icons-material/ModeEditOutlineTwoTone';
import DoneAllTwoToneIcon from '@mui/icons-material/DoneAllTwoTone';
import { useDispatch } from 'react-redux';
import { deleteTodo } from '../redux/actions'
import { updateTodo } from '../redux/actions'

const TodoCont = styled.div`
    position:relative; 
    height:50px;
    width:95%;
    background-color:#66ff66;
    color:black;
    margin:10px auto;
    display:flex;
    align-items:center;
    border-radius:5px;
    padding:0 15px;
    font-size:1.2rem;
    box-sizing: border-box;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
`
const DeleteForeverIconCust = styled(DeleteForeverIcon)`
    position:absolute;      
    width:30%;
    font-size:30px !important;
    color:black;
    display:flex;
    align-items:center;
    margin: auto;
    right:10px;
    color:red;
    cursor:pointer;
   
   
`
const EditIconCust = styled(ModeEditOutlineTwoToneIcon)`
    position:absolute;      
    width:30%;
    font-size:30px !important;
    color:black;
    display:flex;
    align-items:center;
    margin: auto;
    right:50px;
    color:red;
    cursor:pointer;
    color:blue;
    bottom:8px;
   
`
const btn = styled.button`
    position:absolute;    
    height:50px;  
    width:30%;
    font-size:30px !important;
    color:black;
    display:flex;
    align-items:center;
    margin: auto;
    right:50px;
    color:red;
    cursor:pointer;
    color:blue;
    bottom:8px;
`
const SaveIconCust = styled(DoneAllTwoToneIcon)`
    position:absolute;      
    width:30%;
    font-size:30px !important;
    color:black;
    display:flex;
    align-items:center;
    margin: auto;
    right:50px;
    color:red;
    cursor:pointer;
    color:green;
    bottom:8px;
   
`
const Todo = ({ todo }) => {

  const [edittable, setEditTable] = useState(false)
  const [name, setName] = useState(todo.name)

  const dispatch = useDispatch()


  return (
    <motion.div
      whileHover={{
        scale: 1.05,
        transition: { duration: 1 },
      }}
      initial={{ x: "100%" }}
      animate={{ x: 0 }}
      transition={{ duration: 2 }}
    >
      <TodoCont >
        {edittable ? <input type="text"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}

        />
          : <h4>{todo.name}</h4>}
        <DeleteForeverIconCust
          onClick={() => dispatch(deleteTodo(todo.id))}

        />
        <btn 
         onClick={() => {
          dispatch(updateTodo({
              ...todo,
              name: name
          }))
          if(edittable) {
           setName(todo.name);   
          }
          setEditTable(!edittable);
        

      }}
      >
          {edittable ? <SaveIconCust /> : <EditIconCust />}

        </btn>
      </TodoCont>
    </motion.div>
  )
}

export default Todo