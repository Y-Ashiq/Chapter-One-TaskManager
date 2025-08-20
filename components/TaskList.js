import React from "react";
import { FlatList, StyleSheet } from "react-native";
import { SPACING } from "../constants/colors";
import { TaskItem } from "./TaskItem";
import { EmptyState } from "./EmptyState";

export const TaskList = ({
  tasks,
  onToggle,
  onDelete,
  style,
  contentContainerStyle,
}) => {
  const renderTask = ({ item }) => (
    <TaskItem task={item} onToggle={onToggle} onDelete={onDelete} />
  );

  return (
    <FlatList
      data={tasks}
      renderItem={renderTask}
      keyExtractor={(item) => item.id.toString()}
      style={[styles.container, style]}
      contentContainerStyle={contentContainerStyle}
      showsVerticalScrollIndicator={false}
      ListEmptyComponent={<EmptyState />}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: SPACING.lg,
  },
});
