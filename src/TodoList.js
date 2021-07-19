import React from "react";
import { connect } from "react-redux";
import Todo from "./Todo";

const TodoList = ({ todos, filter }) => {
  const getFilteredTodos = () => {
    if (filter === "Incomplete") return todos.filter((t) => !t.complete);
    if (filter === "Complete") return todos.filter((t) => t.complete);
    return todos;
  };

  return (
    <div>
      <p>TodoList Filter:{filter}</p>
      {getFilteredTodos().map((t) => (
        <Todo key={t.id} {...t} />
      ))}
    </div>
  );
};

const mapStateToProps = (state) => {
  return { todos: state.todos, filter: state.filter };
};
export default connect(mapStateToProps)(TodoList);
