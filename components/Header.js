import React from "react";
import { View, Text, StyleSheet, Platform } from "react-native";
import { COLORS, SPACING, FONT_SIZES, FONT_WEIGHTS } from "../constants/colors";

export const Header = ({ title, subtitle, style }) => {
  return (
    <View style={[styles.header, style]}>
      <Text style={styles.title}>{title}</Text>
      {subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: COLORS.primary,
    paddingTop: Platform.OS === "ios" ? 60 : 40,
    paddingBottom: SPACING.lg,
    paddingHorizontal: SPACING.lg,
    alignItems: "center",
  },
  title: {
    fontSize: FONT_SIZES.xxxl,
    fontWeight: FONT_WEIGHTS.bold,
    color: COLORS.white,
    marginBottom: SPACING.xs,
  },
  subtitle: {
    fontSize: FONT_SIZES.md,
    color: "rgba(255, 255, 255, 0.8)",
  },
});
