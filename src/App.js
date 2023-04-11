import React, { useEffect, useState } from "react";
import Habit from "./Habit";
import HabitList from "./HabitList/HabitList";
import Calendar from "./Calendar/Calendar";
import AddHabitModal from "./AddHabitModal";

function App() {
  const [habitTypeRadio, setHabitTypeRadio] = useState(true);
  const [selectedHabit, setSelectedHabit] = useState(0);
  const [calendarMonth, setCalendarMonth] = useState(new Date());
  const [showAddHabitModal, setShowAddHabitModal] = useState(true);
  const [itemList, setItemList] = useState({
    goodHabits: [
      new Habit("Cooked at home", "👨‍🍳"),
      new Habit("Went to the gym", "🏋️"),
    ],
    badHabits: [],
  });

  useEffect(() => {
    updateItemList((itemList) => {
      itemList.goodHabits[0].addLog(2023, 4, 1);
      itemList.goodHabits[0].addLog(2023, 4, 11);
      itemList.goodHabits[1].addLog(2023, 4, 11);
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

  const toggleAddHabitModal = () => {
    setShowAddHabitModal(!showAddHabitModal);
  };

  return (
    <div className="App">
      <AddHabitModal
        show={showAddHabitModal}
        toggleAddHabitModal={toggleAddHabitModal}
        itemList={itemList}
        updateItemList={updateItemList}
      />
      <div className="navigation d-flex"></div>
      <div className="d-flex">
        <HabitList
          itemList={itemList}
          updateItemList={updateItemList}
          selectedHabit={selectedHabit}
          setSelectedHabit={setSelectedHabit}
          habitTypeRadio={habitTypeRadio}
          changeHabitType={changeHabitType}
          toggleAddHabitModal={toggleAddHabitModal}
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
