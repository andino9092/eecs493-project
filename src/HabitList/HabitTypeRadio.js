import React from "react";
import PropTypes from "prop-types";

function HabitTypeRadio(props) {
  return (
    <ul className="nav nav-pills nav-fill mb-3">
      <li className="nav-item">
        <p
          className={"nav-link" + (props.habitTypeRadio ? " active" : "")}
          onClick={props.changeHabitType}
        >
          Good Habits
        </p>
      </li>
      <li className="nav-item">
        <p
          className={"nav-link" + (props.habitTypeRadio ? "" : " active")}
          onClick={props.changeHabitType}
        >
          Bad Habits
        </p>
      </li>
    </ul>
  );
}

HabitTypeRadio.propTypes = {
  habitTypeRadio: PropTypes.bool.isRequired,
  changeHabitType: PropTypes.func.isRequired,
};

export default HabitTypeRadio;
