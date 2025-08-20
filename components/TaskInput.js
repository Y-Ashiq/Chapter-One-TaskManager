import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { SPACING } from "../constants/colors";
import { STRINGS } from "../constants/strings";
import { Input } from "./Input";
import { Button } from "./Button";

export const TaskInput = ({ onAddTask, style }) => {
  const [taskText, setTaskText] = useState("");

  const handleAddTask = () => {
    if (onAddTask(taskText)) {
      setTaskText("");
    }
  };

  return (
    <View style={[styles.container, style]}>
      <Input
        value={taskText}
        onChangeText={setTaskText}
        placeholder={STRINGS.tasks.input.placeholder}
        onSubmitEditing={handleAddTask}
        returnKeyType="done"
        style={styles.input}
      />
      <Button
        title={STRINGS.tasks.input.button}
        onPress={handleAddTask}
        style={styles.button}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: SPACING.lg,
    backgroundColor: "white",
    borderBottomWidth: 1,
    borderBottomColor: "#e0e0e0",
  },
  input: {
    flex: 1,
  },
  button: {
    marginLeft: SPACING.md,
  },
});
