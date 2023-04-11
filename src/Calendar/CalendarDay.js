import React from "react";
import PropTypes from "prop-types";

function CalendarDay(props) {
  const isToday = () => {
    const thisDate = new Date(
      props.date.getFullYear(),
      props.date.getMonth(),
      props.day
    );
    const today = new Date();

    return thisDate.setHours(0, 0, 0, 0) === today.setHours(0, 0, 0, 0);
  };

  return (
    <div className="cal-date col" onClick={props.toggleLog}>
      <p className={"date-num" + (isToday() ? " today" : "")}>{props.day}</p>
      <div className="cal-emoji-area">
        {props.emojiList.map((emoji) => (
          <span className="list-emoji" key={"emoji-" + emoji + "-" + props.day}>
            {emoji}
          </span>
        ))}
      </div>
    </div>
  );
}

CalendarDay.propTypes = {
  day: PropTypes.string.isRequired,
  date: PropTypes.instanceOf(Date),
  emojiList: PropTypes.array.isRequired,
  toggleLog: PropTypes.func.isRequired,
};

export default CalendarDay;
