import { useState } from "react";
import AddTask from "./components/AddTask";
import Header from "./components/Header";
import SortTasks from "./components/SortTasks";
import useTaskServices from "./hooks/useTaskServices";

function ToDoList() {
  const [sortBy, setSortBy] = useState("dateAdded");
  const { addTask, editTask, removeTask, undoDelete } = useTaskServices();

  function changeSorting(newSort) {
    setSortBy(newSort);
  }

  return (
    <>
      <div className=" max-w-[500px] overflow-auto min-h-[300px]  mx-auto my-[30px] p-[30px] rounded-[5px]">
        <Header />
        <AddTask addTask={addTask}/>
        <SortTasks sortBy={sortBy} changeSorting={changeSorting} />
      </div>
    </>
  );
}

export default ToDoList;
