import { useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import { motion } from "framer-motion"

function App() {
const [todos, setTodos] = useState([JSON.parse(localStorage.getItem('todos'))])

  return (
    <div >
      <motion.h1
        whileHover={{
          scale: 1.05,
          transition: { duration: 1 },
        }}
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        transition={{ duration: 2 }}
      
      style={{textAlign:'center',marginTop:'50px',color:'#66ff66'}}>Todo App</motion.h1>
      <TodoForm todos={todos} setTodos={setTodos}/>
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;
