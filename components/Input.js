import React from "react";
import { TextInput, StyleSheet } from "react-native";
import {
  COLORS,
  SPACING,
  BORDER_RADIUS,
  FONT_SIZES,
} from "../constants/colors";

export const Input = ({
  value,
  onChangeText,
  placeholder,
  onSubmitEditing,
  returnKeyType = "default",
  style,
  ...props
}) => {
  return (
    <TextInput
      style={[styles.input, style]}
      value={value}
      onChangeText={onChangeText}
      placeholder={placeholder}
      placeholderTextColor={COLORS.gray[400]}
      onSubmitEditing={onSubmitEditing}
      returnKeyType={returnKeyType}
      autoCapitalize="none"
      autoCorrect={false}
      {...props}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: COLORS.gray[300],
    borderRadius: BORDER_RADIUS.round,
    paddingHorizontal: SPACING.lg,
    fontSize: FONT_SIZES.md,
    backgroundColor: COLORS.gray[100],
    color: COLORS.gray[800],
  },
});
