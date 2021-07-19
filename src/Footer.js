import React from "react";
import { connect } from "react-redux";

const Footer = ({ dispatch }) => {
  return (
    <div>
      <p>Footer</p>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "400px",
        }}
      >
        <p onClick={() => dispatch({ type: "SET_FILTER", filter: "All" })}>
          All
        </p>
        <p onClick={() => dispatch({ type: "SET_FILTER", filter: "Complete" })}>
          Complete
        </p>
        <p
          onClick={() => dispatch({ type: "SET_FILTER", filter: "Incomplete" })}
        >
          InComplete
        </p>
      </div>
    </div>
  );
};

export default connect()(Footer);
