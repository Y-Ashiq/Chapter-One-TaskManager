import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import {
  COLORS,
  SPACING,
  BORDER_RADIUS,
  FONT_SIZES,
  FONT_WEIGHTS,
} from "../constants/colors";

export const Button = ({
  title,
  onPress,
  variant = "primary",
  size = "medium",
  disabled = false,
  style,
  textStyle,
  ...props
}) => {
  const buttonStyles = [
    styles.button,
    styles[variant],
    styles[size],
    disabled && styles.disabled,
    style,
  ];

  const textStyles = [
    styles.text,
    styles[`${variant}Text`],
    styles[`${size}Text`],
    disabled && styles.disabledText,
    textStyle,
  ];

  return (
    <TouchableOpacity
      style={buttonStyles}
      onPress={onPress}
      disabled={disabled}
      activeOpacity={0.8}
      {...props}
    >
      <Text style={textStyles}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: BORDER_RADIUS.round,
  },

  // Variants
  primary: {
    backgroundColor: COLORS.primary,
  },
  secondary: {
    backgroundColor: COLORS.gray[200],
  },
  danger: {
    backgroundColor: COLORS.danger,
  },
  success: {
    backgroundColor: COLORS.success,
  },

  // Sizes
  small: {
    height: 36,
    paddingHorizontal: SPACING.md,
  },
  medium: {
    height: 50,
    paddingHorizontal: SPACING.lg,
  },
  large: {
    height: 56,
    paddingHorizontal: SPACING.xl,
  },

  // Text styles for variants
  primaryText: {
    color: COLORS.white,
  },
  secondaryText: {
    color: COLORS.gray[700],
  },
  dangerText: {
    color: COLORS.white,
  },
  successText: {
    color: COLORS.white,
  },

  // Text styles for sizes
  smallText: {
    fontSize: FONT_SIZES.sm,
    fontWeight: FONT_WEIGHTS.medium,
  },
  mediumText: {
    fontSize: FONT_SIZES.md,
    fontWeight: FONT_WEIGHTS.semibold,
  },
  largeText: {
    fontSize: FONT_SIZES.lg,
    fontWeight: FONT_WEIGHTS.semibold,
  },

  // States
  disabled: {
    opacity: 0.6,
  },
  disabledText: {
    opacity: 0.8,
  },
});
