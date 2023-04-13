import React, { useEffect } from "react";
import PropTypes from "prop-types";
import EmojiPicker, { EmojiStyle } from "emoji-picker-react";
import { useState } from "react";
import HabitTypeRadio from "../HabitList/HabitTypeRadio";
import Habit from "../Habit";

function AddHabitModal(props) {
  const [habitName, setHabitName] = useState("");
  const [selectedEmoji, setSelectedEmoji] = useState("😄");

  useEffect(() => {
    setHabitName("");
    setSelectedEmoji("😄");
  }, [props.show]);

  const handleInputChange = (e) => {
    setHabitName(e.target.value);
  };

  const handleEmojiClick = (emojiData) => {
    setSelectedEmoji(emojiData.emoji);
  };

  const handleAddHabit = () => {
    if (habitName === "") {
      alert("Habit name must not be empty!");
    } else {
      if (props.habitType) {
        props.itemList.goodHabits.push(new Habit(habitName, selectedEmoji));
      } else {
        props.itemList.badHabits.push(new Habit(habitName, selectedEmoji));
      }
      props.updateItemList();
      props.toggleAddHabitModal();
    }
  };

  return !props.show ? (
    <></>
  ) : (
    <div className="overlay">
      <div className="add-habit-modal">
        <span
          className="close-modal"
          role="img"
          onClick={props.toggleAddHabitModal}
          aria-label="Close modal"
        >
          ✖️
        </span>
        <h4 className="modal-title">
          Add {props.habitType ? "Good" : "Bad"} Habit to Track
        </h4>
        <div className="modal-input-wrapper d-flex justify-content-around">
          <div>
            <label htmlFor="habit-name">Name</label>
            <div className="d-flex gap-4 align-items-center">
              <input
                className="habit-name-input"
                id="habit-name"
                type="text"
                onChange={handleInputChange}
              />
              <span className="bold">Selected Emoji</span>
              <span
                className="habit-emoji"
                role="img"
                aria-label={selectedEmoji}
              >
                {selectedEmoji}
              </span>
            </div>
          </div>
        </div>
        <div className="emoji-picker">
          <EmojiPicker
            width="120%"
            height="25em"
            emojiStyle={EmojiStyle.APPLE}
            onEmojiClick={handleEmojiClick}
          />
        </div>
        <button
          type="button"
          className="add-habit-btn btn"
          onClick={handleAddHabit}
        >
          Add Habit
        </button>
      </div>
    </div>
  );
}

AddHabitModal.propTypes = {
  toggleAddHabitModal: PropTypes.func.isRequired,
  itemList: PropTypes.object.isRequired,
  updateItemList: PropTypes.func.isRequired,
  habitType: PropTypes.bool.isRequired,
};

export default AddHabitModal;
