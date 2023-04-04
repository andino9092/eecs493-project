import React from "react";
import PropTypes from "prop-types";
import ListItem from "./ListItem";
import HabitTypeRadio from "./HabitTypeRadio";

function HabitList(props) {
  const toggleItemView = (ind, category) => {
    props.updateItemList((itemList) => {
      category
        ? (itemList.goodHabits[ind].view = !itemList.goodHabits[ind].view)
        : (itemList.badHabits[ind].view = !itemList.badHabits[ind].view);
    });
  };

  return (
    <div className="habit-list m-2">
      <HabitTypeRadio
        habitTypeRadio={props.habitTypeRadio}
        changeHabitType={props.changeHabitType}
      />
      <ul className="list-group list-group-flush">
        <li className="list-group-item add-item-row d-flex align-items-center">
          <div className="checkbox-col">View</div>
          <div
            className="vr"
            style={{ color: "#adb5bd", width: "1.5px" }}
          ></div>
          <span className="list-emoji" role="img" aria-label="Add new item">
            ➕
          </span>
          <p className="m-0">Add new item</p>
        </li>
        {props.habitTypeRadio
          ? props.itemList.goodHabits.map((habit, index) => (
              <ListItem
                habit={habit}
                key={index}
                toggleItemView={() => toggleItemView(index, true)}
              />
            ))
          : props.itemList.badHabits.map((habit, index) => (
              <ListItem
                habit={habit}
                key={index}
                toggleItemView={() => toggleItemView(index, false)}
              />
            ))}
      </ul>
    </div>
  );
}

HabitList.propTypes = {
  itemList: PropTypes.object.isRequired,
  updateItemList: PropTypes.func.isRequired,
  habitTypeRadio: PropTypes.bool.isRequired,
  changeHabitType: PropTypes.func.isRequired,
};

export default HabitList;
