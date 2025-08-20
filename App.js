import React from "react";
import { KeyboardAvoidingView, Platform, StyleSheet } from "react-native";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";

// Custom hooks
import { useTasks } from "./hooks/useTasks";

// Reusable components
import { Header, TaskInput, TaskList } from "./components";

// Constants
import { COLORS } from "./constants/colors";
import { STRINGS } from "./constants/strings";

// Utils
import { formatTaskCount } from "./utils/taskUtils";

export default function App() {
  const { tasks, addTask, toggleTask, deleteTask, getTaskCount } = useTasks();

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ExpoStatusBar style="light" />

      <Header
        title={STRINGS.app.title}
        subtitle={formatTaskCount(getTaskCount())}
      />

      <TaskInput onAddTask={addTask} />

      <TaskList tasks={tasks} onToggle={toggleTask} onDelete={deleteTask} />
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.secondary,
  },
});
