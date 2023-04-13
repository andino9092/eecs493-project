import React, { useEffect, useState } from "react";
import Habit from "./Habit";
import HabitList from "./HabitList/HabitList";
import Calendar from "./Calendar/Calendar";
import AddHabitModal from "./modals/AddHabitModal";
import HabitInfoModal from "./modals/HabitInfoModal";

function App() {
  const [habitTypeRadio, setHabitTypeRadio] = useState(true);
  const [selectedHabit, setSelectedHabit] = useState(0);
  const [calendarMonth, setCalendarMonth] = useState(new Date());
  const [showAddHabitModal, setShowAddHabitModal] = useState(false);
  const [habitInfoChoice, setHabitInfoChoice] = useState({});
  const [showHabitInfoModal, setShowHabitInfoModal] = useState(false);
  const [itemList, setItemList] = useState({
    goodHabits: [
      new Habit("Cooked at home", "👨‍🍳"),
      new Habit("Went to the gym", "🏋️"),
    ],
    badHabits: [],
  });

  useEffect(() => {
    itemList.goodHabits[0].addLog(2023, 4, 1);
    itemList.goodHabits[0].addLog(2023, 4, 11);
    itemList.goodHabits[1].addLog(2023, 4, 11);
    updateItemList();
  }, []);

  const updateItemList = () => {
    const newItemList = { ...itemList };
    setItemList(newItemList);
  };

  const changeHabitType = (bool) => {
    setHabitTypeRadio(bool);
    setSelectedHabit(0);
  };

  const deleteHabit = () => {
    habitInfoChoice.habitType
      ? itemList.goodHabits.splice(habitInfoChoice.index, 1)
      : itemList.badHabits.splice(habitInfoChoice.index, 1);
    updateItemList();
    toggleHabitInfoModal(false, 0);
  };

  const toggleAddHabitModal = () => {
    setShowAddHabitModal(!showAddHabitModal);
  };

  const toggleHabitInfoModal = (type, index) => {
    setHabitInfoChoice({ habitType: type, index: index });
    setShowHabitInfoModal(!showHabitInfoModal);
  };

  return (
    <div className="App">
      <AddHabitModal
        show={showAddHabitModal}
        toggleAddHabitModal={toggleAddHabitModal}
        itemList={itemList}
        updateItemList={updateItemList}
        habitType={habitTypeRadio}
      />
      <HabitInfoModal
        show={showHabitInfoModal}
        toggleHabitInfoModal={toggleHabitInfoModal}
        habit={
          habitInfoChoice.habitType
            ? itemList.goodHabits[habitInfoChoice.index]
            : itemList.badHabits[habitInfoChoice.index]
        }
        deleteHabit={deleteHabit}
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
          toggleHabitInfoModal={toggleHabitInfoModal}
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
