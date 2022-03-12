import React from 'react'
import Todo from './Todo'
import styled from 'styled-components'
import { useSelector } from 'react-redux'


const TodoListCont = styled.div`
   position: relative;
    width: 30%;
    color: black;
    margin: 10px auto;
    padding:10px 0;
    border-radius:10px;
    box-shadow: rgba(125, 125, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;

`

const TodoList = () => {
  const todos=useSelector(state=>state)
  return (
      <TodoListCont>
          {
            todos &&   todos.map((todo,index)=>(<Todo todo={todo} key={index}/>))
          }
      </TodoListCont>
  )
}

export default TodoList