import React from 'react';
import { connect } from "react-redux";
import { addDashboard } from "../../redux/actions";

let handleClick = (props) => {
    props.addDashboard();
}

const Action = () => {
  return (
    <div>
      <button onClick={() => handleClick()}> + Dashboard</button>

    </div>
  );
}

export default connect(
  null,
  { addDashboard }
)(Action);
