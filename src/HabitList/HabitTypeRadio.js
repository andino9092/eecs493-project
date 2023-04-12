import React from "react";
import PropTypes from "prop-types";

function HabitTypeRadio(props) {
  return (
    <ul className="nav nav-pills nav-fill mb-3">
      <li className="nav-item">
        <p
          className={"nav-link" + (props.habitTypeRadio ? " active" : "")}
          onClick={() => props.changeHabitType(true)}
        >
          Good Habit{!props.isPlural ? "s" : ""}
        </p>
      </li>
      <li className="nav-item">
        <p
          className={"nav-link" + (props.habitTypeRadio ? "" : " active")}
          onClick={() => props.changeHabitType(false)}
        >
          Bad Habit{!props.isPlural ? "s" : ""}
        </p>
      </li>
    </ul>
  );
}

HabitTypeRadio.propTypes = {
  isPlural: PropTypes.bool,
  habitTypeRadio: PropTypes.bool.isRequired,
  changeHabitType: PropTypes.func.isRequired,
};

export default HabitTypeRadio;
