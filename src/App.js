import React, { useEffect, useState } from "react";
import Habit from "./classes/Habit";
import HabitList from "./HabitList/HabitList";
import Calendar from "./Calendar/Calendar";

function App() {
  const [habitTypeRadio, setHabitTypeRadio] = useState(true);
  const [selectedHabit, setSelectedHabit] = useState(0);
  const [calendarMonth, setCalendarMonth] = useState(new Date());
  const [itemList, setItemList] = useState({
    goodHabits: [
      new Habit("Cooked at home", "👨‍🍳"),
      new Habit("Went to the gym", "🏋️"),
    ],
    badHabits: [],
  });

  useEffect(() => {
    updateItemList((itemList) => {
      itemList.goodHabits[0].records.add("2023/04/01");
    });
  }, []);

  const updateItemList = (func) => {
    const newItemList = { ...itemList };
    func(newItemList);
    setItemList(newItemList);
    console.log(itemList);
  };

  const changeHabitType = () => {
    setHabitTypeRadio(!habitTypeRadio);
    setSelectedHabit(0);
  };

  return (
    <div className="App">
      <div className="navigation d-flex"></div>
      <div className="d-flex">
        <HabitList
          itemList={itemList}
          updateItemList={updateItemList}
          selectedHabit={selectedHabit}
          setSelectedHabit={setSelectedHabit}
          habitTypeRadio={habitTypeRadio}
          changeHabitType={changeHabitType}
        />
        <Calendar
          date={calendarMonth}
          setCalendarMonth={setCalendarMonth}
          viewHabitsList={
            habitTypeRadio ? itemList.goodHabits : itemList.badHabits
          }
          updateItemList={updateItemList}
          selectedHabit={selectedHabit}
        />
      </div>
    </div>
  );
}

export default App;
