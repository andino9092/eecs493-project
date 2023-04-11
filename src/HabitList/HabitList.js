import React from "react";
import PropTypes from "prop-types";
import ListItem from "./ListItem";
import HabitTypeRadio from "./HabitTypeRadio";

function HabitList(props) {
  const habitsToRender = props.habitTypeRadio
    ? props.itemList.goodHabits
    : props.itemList.badHabits;
  const toggleItemView = (ind, category) => {
    category
      ? (props.itemList.goodHabits[ind].view = !props.itemList.goodHabits[ind]
          .view)
      : (props.itemList.badHabits[ind].view = !props.itemList.badHabits[ind]
          .view);
    props.updateItemList(() => {});
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
          <span
            className="list-emoji"
            role="img"
            aria-label="Add new item"
            onClick={props.toggleAddHabitModal}
          >
            ➕
          </span>
          <p className="list-add-habit m-0" onClick={props.toggleAddHabitModal}>
            Add new item
          </p>
        </li>
        {habitsToRender.map((habit, index) => (
          <ListItem
            habit={habit}
            toggleItemView={() => toggleItemView(index, true)}
            highlighted={props.selectedHabit === index}
            setSelectedHabit={() => props.setSelectedHabit(index)}
            key={index}
          />
        ))}
      </ul>
    </div>
  );
}

HabitList.propTypes = {
  itemList: PropTypes.object.isRequired,
  updateItemList: PropTypes.func.isRequired,
  selectedHabit: PropTypes.number.isRequired,
  setSelectedHabit: PropTypes.func.isRequired,
  habitTypeRadio: PropTypes.bool.isRequired,
  changeHabitType: PropTypes.func.isRequired,
  toggleAddHabitModal: PropTypes.func.isRequired,
};

export default HabitList;
