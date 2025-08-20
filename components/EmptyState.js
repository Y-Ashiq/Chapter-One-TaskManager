import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { COLORS, SPACING, FONT_SIZES } from "../constants/colors";
import { STRINGS } from "../constants/strings";

export const EmptyState = ({
  title = STRINGS.tasks.empty.title,
  subtitle = STRINGS.tasks.empty.subtitle,
  style,
}) => {
  return (
    <View style={[styles.container, style]}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: SPACING.xxl,
  },
  title: {
    fontSize: FONT_SIZES.lg,
    color: COLORS.gray[600],
    marginBottom: SPACING.sm,
    fontWeight: "500",
  },
  subtitle: {
    fontSize: FONT_SIZES.sm,
    color: COLORS.gray[500],
  },
});
