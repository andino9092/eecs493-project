import React from "react";
import PropTypes from "prop-types";
import Habit from "../classes/Habit";

function ListItem(props) {
  const { name, emoji, view } = props.habit;

  return (
    <li className="list-group-item d-flex align-items-center">
      <input
        className="checkbox-col"
        type="checkbox"
        checked={view}
        onChange={props.toggleItemView}
      />
      <div className="vr" style={{ color: "#adb5bd", width: "1.5px" }}></div>
      <span className="list-emoji" role="img" aria-label="Cooked at home">
        {emoji}
      </span>
      <p className="m-0">{name}</p>
    </li>
  );
}

ListItem.propTypes = {
  habit: PropTypes.instanceOf(Habit),
  toggleItemView: PropTypes.func.isRequired,
};

export default ListItem;
