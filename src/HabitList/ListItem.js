import React from "react";
import PropTypes from "prop-types";
import Habit from "../classes/Habit";

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
      <input
        className="checkbox-col"
        type="checkbox"
        onChange={props.toggleItemView}
        checked={view}
      />
      <div className="vr" style={{ color: "#adb5bd", width: "1.5px" }}></div>
      <div className="list-item">
        <span className="list-emoji" role="img" aria-label="Cooked at home">
          {emoji}
        </span>
        <span className="m-0">{name}</span>
      </div>
    </li>
  );
}

ListItem.propTypes = {
  habit: PropTypes.instanceOf(Habit),
  toggleItemView: PropTypes.func.isRequired,
  highlighted: PropTypes.bool.isRequired,
  setSelectedHabit: PropTypes.func.isRequired,
};

export default ListItem;
