import React from "react";
import PropTypes from "prop-types";
import EmojiPicker, { EmojiStyle } from "emoji-picker-react";
import { useState } from "react";

function AddHabitModal(props) {
  const [selectedEmoji, setSelectedEmoji] = useState("😄");
  const [habitTypeRadio, setHabitTypeRadio] = useState(true);

  const changeHabitType = () => {
    setHabitTypeRadio(!habitTypeRadio);
  };

  const onEmojiClickHandler = (emojiData) => {
    setSelectedEmoji(emojiData.emoji);
  };

  const onAddHabit = () => {};

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
        <h4 className="modal-title">Add Habit to Track</h4>
        <ul className="nav nav-pills nav-fill">
          <li className="nav-item">
            <p
              className={"nav-link" + (habitTypeRadio ? " active" : "")}
              onClick={changeHabitType}
            >
              Good Habit
            </p>
          </li>
          <li className="nav-item">
            <p
              className={"nav-link" + (habitTypeRadio ? "" : " active")}
              onClick={changeHabitType}
            >
              Bad Habit
            </p>
          </li>
        </ul>
        <div className="modal-input-wrapper d-flex justify-content-around">
          <div>
            <label htmlFor="habit-name">Name</label>
            <div className="d-flex gap-4 align-items-center">
              <input className="habit-name-input" id="habit-name" type="text" />
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
            onEmojiClick={onEmojiClickHandler}
          />
        </div>
        <button
          type="button"
          className="add-habit-btn btn"
          onClick={onAddHabit}
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
};

export default AddHabitModal;
