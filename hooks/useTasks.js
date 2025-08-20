import { useState } from "react";
import { Alert } from "react-native";
import { validateTaskText, formatTime } from "../utils/taskUtils";
import { STRINGS } from "../constants/strings";

export const useTasks = () => {
  const [tasks, setTasks] = useState([]);
  const [taskId, setTaskId] = useState(1);

  const addTask = (taskText) => {
    if (!validateTaskText(taskText)) {
      Alert.alert("Error", STRINGS.app.error.emptyTask);
      return false;
    }

    const newTask = {
      id: taskId,
      text: taskText.trim(),
      completed: false,
      createdAt: formatTime(new Date()),
    };

    setTasks((prevTasks) => [...prevTasks, newTask]);
    setTaskId((prevId) => prevId + 1);
    return true;
  };

  const toggleTask = (id) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id) => {
    Alert.alert(STRINGS.tasks.delete.title, STRINGS.tasks.delete.message, [
      { text: STRINGS.tasks.delete.cancel, style: "cancel" },
      {
        text: STRINGS.tasks.delete.confirm,
        style: "destructive",
        onPress: () => {
          setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
        },
      },
    ]);
  };

  const getTaskCount = () => tasks.length;
  const getCompletedCount = () => tasks.filter((task) => task.completed).length;
  const getIncompleteCount = () =>
    tasks.filter((task) => !task.completed).length;

  return {
    tasks,
    addTask,
    toggleTask,
    deleteTask,
    getTaskCount,
    getCompletedCount,
    getIncompleteCount,
  };
};
