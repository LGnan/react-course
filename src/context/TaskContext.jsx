import { useState, useEffect, createContext } from "react";
import { tasks as data } from "../data/tasks";

export const TaskContext = createContext();
export function TaskContextProvider(props) {
  useEffect(() => {
    setTasks(data);
  }, []);
  const [tasks, setTasks] = useState([]);
  function createTask(task) {
    setTasks([
      ...tasks,
      { title: task.title, id: tasks.length, description: task.description },
    ]);
  }
  function deleteTask(taskId) {
    setTasks(tasks.filter((task) => task.id !== taskId));
  }

  return (
    <TaskContext.Provider
      value={{
        tasks,
        deleteTask,
        createTask,
      }}
    >
      {props.children}
    </TaskContext.Provider>
  );
}
