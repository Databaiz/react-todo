import React, {useEffect, useState} from "react";
import "./App.css";
//Importing Components
import Form from "./components/Form";
import TodoList from "./components/TodoList";
function App() {
  //State stuff
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [fiteredTodos, setFilteredTodos] = useState([]);

  //RUN ONCE when the app start
  useEffect(() => {
    getLocalTodos();
  }, []);
  //Use Effect
  // useEffect(() => {
  //   // filterHandler();
  //   saveLocalTodos();
  // }, []);

  
  //Functions
  // const filterHandler = () => {
  //   switch (status) {
  //     case "completed":
  //       setFilteredtodos(todos.filter((todo) => todo.completed === true))
  //       break;
  //     case "pending":
  //       setFilteredtodos(todos.filter((todo) => todo.completed === false))
  //       break;
  //     default:
  //       setFilteredtodos(todos);
  //       break;
  //   }
  // };

  const filterHandler = () => {
     switch (status) { 
      case 'completed': 
      setFilteredTodos(todos.filter(todo => todo.completed === true))
      break;
       case 'pending':
        setFilteredTodos(todos.filter(todo => todo.completed === false))
       break; 
       default:
        setFilteredTodos(todos);
       break; 
      } 
      }

      useEffect(() => {
        filterHandler();
        saveLocalTodos();
      }, [todos, status]);
  //Save to Local
  // const saveLocalTodos = () => { 
  //     localStorage.setItem("todos", JSON.stringify(todos));
  // };
  // const getLocalTodos = () => {
  //   if(localStorage.getItem("todos") === null) {
  //     localStorage.setItem("todos", JSON.stringify([]));
  //   } else {
  //   let todoLocal = JSON.parse(localStorage.getItem("todos"));
  //   setTodos(todoLocal);
  //   }
  // };

  const saveLocalTodos = () => {
    if(todos && todos.length > 0) { 
      localStorage.setItem('todos', JSON.stringify(todos));
 } 
};
const getLocalTodos = () => {
  if(localStorage.getItem('todos') === null) { 
    localStorage.setItem('todos', JSON.stringify([]));
   }else{
    let todoLocal = JSON.parse(localStorage.getItem('todos'));
    setTodos(todoLocal); 
}
};


  return (
    <div className="App">
      <header>
      <h1>Work Todo List</h1>
      </header>
      <Form 
        inputText={inputText} 
        todos={todos} 
        setTodos={setTodos}
        setInputText={setInputText} 
        setStatus={setStatus} 
      />
      <TodoList 
      todos={todos}
      setTodos={setTodos} 
      filteredTodos={fiteredTodos} 
    />
    </div>
  );
}

export default App;
