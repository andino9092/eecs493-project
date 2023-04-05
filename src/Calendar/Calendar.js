import React from "react";
import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import CalendarDay from "./CalendarDay";

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

function Calendar(props) {
  const [calendar, setCalendar] = useState([[]]);

  useEffect(() => {
    setCalendar(buildCalendar(props.date));
  }, [props.date]);

  const decrMonth = () => {
    return props.date.setMonth(props.date.getMonth() - 1);
  };

  const incrMonth = () => {
    return props.date.setMonth(props.date.getMonth() + 1);
  };

  const buildCalendar = (date) => {
    const firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
    const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);
    let increment = 1;

    const calendar = [];

    while (increment <= lastDay.getDate()) {
      calendar.push([]);
      for (let i = 0; i < 7; ++i) {
        if (increment === 1 && i < firstDay.getDay()) {
          calendar[calendar.length - 1].push("");
        } else if (increment <= lastDay.getDate()) {
          calendar[calendar.length - 1].push(String(increment));
          increment += 1;
        } else {
          calendar[calendar.length - 1].push("");
        }
      }
    }

    console.log("built new calendar");

    return calendar;
  };

  return (
    <div className="calendar container">
      <div className="d-flex justify-content-between align-items-center">
        <h3
          className="arrow"
          onClick={() => props.setCalendarMonth(new Date(decrMonth()))}
        >
          &#60;
        </h3>
        <h4 className="cal-month">
          {months[props.date.getMonth()]} {props.date.getFullYear()}
        </h4>
        <h3
          className="arrow"
          onClick={() => props.setCalendarMonth(new Date(incrMonth()))}
        >
          &#62;
        </h3>
      </div>
      <div className="cal container">
        {calendar.map((week, weekind) => {
          return (
            <div className="cal-row row" key={"cal-week-" + weekind}>
              {week.map((day, dayind) => (
                <CalendarDay
                  day={day}
                  date={props.date}
                  key={"cal-" + weekind + "-" + dayind}
                />
              ))}
            </div>
          );
        })}
      </div>
    </div>
  );
}

Calendar.propTypes = {
  date: PropTypes.instanceOf(Date),
  setCalendarMonth: PropTypes.func.isRequired,
  viewHabitsList: PropTypes.array.isRequired,
  updateItemList: PropTypes.func.isRequired,
  selectedHabit: PropTypes.number.isRequired,
};

export default Calendar;
