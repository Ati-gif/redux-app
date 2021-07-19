import React from "react";
import { connect } from "react-redux";
import Todo from "./Todo";

const TodoList = ({ todos }) => {
  return (
    <div>
      <p>TodoList</p>
      {todos.map((t) => (
        <Todo key={t.id} {...t} />
      ))}
    </div>
  );
};

const mapStateToProps = (state) => {
  return { todos: state.todos };
};
export default connect(mapStateToProps)(TodoList);
