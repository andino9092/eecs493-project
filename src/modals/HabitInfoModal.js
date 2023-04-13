import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Habit from "../Habit";

function HabitInfoModal(props) {
  const [habitInfo, setHabitInfo] = useState({});

  useEffect(() => {
    const date = new Date();
    if (props.habit) {
      setHabitInfo(
        props.habit.getHabitData(date.getFullYear(), date.getMonth())
      );
    }
  }, [props.show]);

  return !props.show ? (
    <></>
  ) : (
    <div className="overlay">
      <div className="habit-info-modal">
        <span
          className="close-modal"
          role="img"
          onClick={props.toggleHabitInfoModal}
          aria-label="Close modal"
        >
          ✖️
        </span>
        <div className="modal-title mb-2">
          <span
            className="list-emoji"
            role="img"
            aria-label={props.habit.emoji}
          >
            {props.habit.emoji}
          </span>
          <span className="habit-title">{props.habit.name}</span>
        </div>
        <div className="habit-data">
          <div className="d-flex justify-content-between">
            <span className="bold">This month</span>
            <span>{habitInfo.thisMonth}</span>
          </div>
          <div className="d-flex justify-content-between">
            <span className="bold">This year</span>
            <span>{habitInfo.thisYear}</span>
          </div>
        </div>
        <button
          type="button"
          className="del-habit-btn btn btn-danger"
          onClick={props.deleteHabit}
        >
          Delete Habit
        </button>
      </div>
    </div>
  );
}

export default HabitInfoModal;

HabitInfoModal.propTypes = {
  show: PropTypes.bool.isRequired,
  toggleHabitInfoModal: PropTypes.func.isRequired,
  habit: PropTypes.instanceOf(Habit),
  deleteHabit: PropTypes.func.isRequired,
};
