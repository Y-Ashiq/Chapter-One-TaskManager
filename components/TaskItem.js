import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import {
  COLORS,
  SPACING,
  BORDER_RADIUS,
  FONT_SIZES,
  FONT_WEIGHTS,
} from "../constants/colors";
import { Button } from "./Button";

export const TaskItem = ({ task, onToggle, onDelete, style }) => {
  return (
    <View style={[styles.container, task.completed && styles.completed, style]}>
      <TouchableOpacity
        style={styles.content}
        onPress={() => onToggle(task.id)}
        activeOpacity={0.7}
      >
        <View style={[styles.checkbox, task.completed && styles.checkedBox]}>
          {task.completed && <Text style={styles.checkmark}>✓</Text>}
        </View>

        <View style={styles.textContainer}>
          <Text
            style={[styles.taskText, task.completed && styles.completedText]}
          >
            {task.text}
          </Text>
          <Text style={styles.timeText}>{task.createdAt}</Text>
        </View>
      </TouchableOpacity>

      <Button
        title="×"
        variant="danger"
        size="small"
        onPress={() => onDelete(task.id)}
        style={styles.deleteButton}
        textStyle={styles.deleteButtonText}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    borderRadius: BORDER_RADIUS.md,
    padding: SPACING.md,
    marginVertical: SPACING.xs,
    flexDirection: "row",
    alignItems: "center",
    shadowColor: COLORS.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  completed: {
    backgroundColor: COLORS.gray[100],
    opacity: 0.8,
  },
  content: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  checkbox: {
    width: 24,
    height: 24,
    borderRadius: BORDER_RADIUS.md,
    borderWidth: 2,
    borderColor: COLORS.primary,
    marginRight: SPACING.md,
    justifyContent: "center",
    alignItems: "center",
  },
  checkedBox: {
    backgroundColor: COLORS.primary,
  },
  checkmark: {
    color: COLORS.white,
    fontSize: FONT_SIZES.md,
    fontWeight: FONT_WEIGHTS.bold,
  },
  textContainer: {
    flex: 1,
  },
  taskText: {
    fontSize: FONT_SIZES.md,
    color: COLORS.gray[800],
    marginBottom: SPACING.xs,
    fontWeight: FONT_WEIGHTS.medium,
  },
  completedText: {
    textDecorationLine: "line-through",
    color: COLORS.gray[600],
  },
  timeText: {
    fontSize: FONT_SIZES.xs,
    color: COLORS.gray[500],
  },
  deleteButton: {
    marginLeft: SPACING.md,
  },
  deleteButtonText: {
    fontSize: FONT_SIZES.xl,
    fontWeight: FONT_WEIGHTS.bold,
  },
});
