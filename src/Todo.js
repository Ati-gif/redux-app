import React from "react";
import { connect } from "react-redux";
const Todo = ({ name, id, complete, dispatch }) => {
  return (
    <div>
      <span
        onClick={() => dispatch({ type: "TOGGLE_TODO", id })}
        style={
          complete ? { textDecoration: "line-through", color: "grey" } : {}
        }
      >
        {" "}
        {name}
      </span>
      <span onClick={() => dispatch({ type: "DELETE_TODO", id })}>delete</span>
    </div>
  );
};

export default connect()(Todo);
