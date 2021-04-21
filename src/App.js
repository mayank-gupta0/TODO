import React, { useState } from 'react'
import Button from '@material-ui/core/Button';
import { FormControl } from '@material-ui/core';
import { InputLabel, Input } from '@material-ui/core';
import Todo from './Todo';
function App() {
  const [todos, setTodos] = useState([
    // "Take something",
    // "Take something",
    // "Take something",

  ]);

  const [input, setInput] = useState("");
  // console.log(input);
  const addTodo = (event) => {
    event.preventDefault(); //it stops refreshing the page
    setTodos([...todos, input])
    setInput("")

  }
  const deleteTodo = (id) => {
    console.log("deleting...")
    setTodos((oldItems) => {
      return oldItems.filter((arrElm, index) => {
        return index !== id;
      })

    })

  }


  return (
    <div className="App">
      <h1>Welcome To Todo App</h1>
      <form>
        <FormControl className="form_control">

          <InputLabel>👩‍🚒 Write a Todo</InputLabel>
          <Input placeholder="Add a Note" value={input} onChange={event => setInput(event.target.value)} />

        </FormControl>


        <Button className="todo_btn" disabled={!input} type="submit" onClick={addTodo} variant="contained" color="primary">
          Add TODO
                </Button>
      </form>

      <ul className="main_body">
        {todos.map((todo, index) => {
          return <li>

            <Todo text={todo} key={index} id={index} onSelect={deleteTodo} />

          </li>

        })}

      </ul>
    </div>
  )
}

export default App;
