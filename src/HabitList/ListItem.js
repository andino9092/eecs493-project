import React from "react";
import PropTypes from "prop-types";
import Habit from "../Habit";

function ListItem(props) {
  const { name, emoji, view } = props.habit;

  return (
    <li
      className={
        "list-group-item d-flex align-items-center" +
        (props.highlighted ? " highlighted" : "")
      }
      onClick={props.setSelectedHabit}
    >
      <div className="checkbox-col d-flex justify-content-around">
        <input
          className="form-check-input"
          type="checkbox"
          onChange={props.toggleItemView}
          checked={view}
        />
      </div>
      <div className="vr" style={{ color: "#adb5bd", width: "1.5px" }}></div>
      <div className="list-item">
        <span className="list-emoji" role="img" aria-label={emoji}>
          {emoji}
        </span>
        <span className="m-0">{name}</span>
      </div>
      <span className="info-button" onClick={props.toggleHabitInfoModal}>ⓘ</span>
    </li>
  );
}

ListItem.propTypes = {
  habit: PropTypes.instanceOf(Habit),
  toggleItemView: PropTypes.func.isRequired,
  highlighted: PropTypes.bool.isRequired,
  setSelectedHabit: PropTypes.func.isRequired,
  toggleHabitInfoModal: PropTypes.func.isRequired
};

export default ListItem;
