import React, { useState } from "react";
import { connect } from "react-redux";

const TodoForm = (props) => {
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name);
    props.dispatch({
      type: "ADD_TODO",
      todo: { name, id: props.id, complete: false },
    });
    props.dispatch({ type: "INC_ID" });
    setName("");
  };

  return (
    <div>
      <p>TodoForm (nextID:) {props.id}</p>
      <form onSubmit={handleSubmit}>
        <p>todo:</p>
        <input value={name} onChange={(e) => setName(e.target.value)} />
        <button type="submit">add</button>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { id: state.nextId };
};
export default connect(mapStateToProps)(TodoForm);
