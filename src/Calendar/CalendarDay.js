import React from "react";
import PropTypes from "prop-types";

function CalendarDay(props) {
  const isToday = () => {
    const thisDate = new Date(
      props.date.getFullYear(),
      props.date.getMonth(),
      props.day
    );
    const today = new Date()

    return thisDate.setHours(0,0,0,0) === today.setHours(0,0,0,0);
  };

  return (
    <div className="cal-date col">
      <p className={"date-num" + (isToday() ? " today" : "")}>{props.day}</p>
    </div>
  );
}

CalendarDay.propTypes = {
  day: PropTypes.string.isRequired,
  date: PropTypes.instanceOf(Date),
};

export default CalendarDay;
