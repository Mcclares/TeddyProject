import React, { useState } from 'react';
import { Todo } from './todo.model';
import Header from './components/Header';
import SideBar from './components/SideBar';


// import TodoList from './components/todoList';
// import NewTodo from './components/NewTodo';
// import Greet from './components/Greet';
// import './App.css';
// import { Person } from './components/Person';
// import PersonList from './components/PersonList';
// import Status from './components/status';


function App() {
   
    // const [todos, setTodos] = useState<Todo[]>([]);
    // const todoAddHandler = (text: string) => {
    //     setTodos(prevTodos => [...prevTodos, {id: Math.random().toString(), text: text}]);
    // };

    // const personName = {
    //     first: 'Bruce',
    //     last: 'Wayne',
    // }


    // const nameList = [
    //     {
    //         first: 'Bruce',
    //         last: 'Wayne'

    //     },
    //     {
    //         first: 'Clark',
    //         last: 'Diana'

    //     },
    //     {
    //         first: 'Princess',
    //         last: 'Diana'

    //     }

    // ];


  return (
      <div className="App">  
    
          <SideBar/>
          {/* <Greet firstName="Artur" messageCount={20} isLoggedIn={false} />
          <Person name={personName} />
          <PersonList names={nameList } />
        <NewTodo onAddTodo={todoAddHandler} />
          <TodoList items={todos} />
          <div id="status">
              <Status status='success'/>

          </div> */}
      </div>
      
  );
}

export default App;
