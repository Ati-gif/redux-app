import React from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import Footer from "./Footer";

const App = () => (
  <div className="App">
    <TodoForm />
    <hr />
    <TodoList />
    <hr />
    <Footer />
  </div>
);

export default App;
