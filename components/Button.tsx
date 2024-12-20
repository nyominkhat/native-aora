import React from "react";
import {
  GestureResponderEvent,
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  TouchableOpacityProps,
  ViewStyle,
} from "react-native";

interface ButtonProps extends TouchableOpacityProps {
  label?: string;
  containerStyles?: StyleProp<ViewStyle>;
  containerClass?: string;
  textClass?: string;
  textStyles?: StyleProp<TextStyle>;
  isLoading?: boolean;
}

const Button = ({
  label,
  textStyles,
  containerStyles,
  containerClass,
  textClass,
  isLoading,
  ...rest
}: ButtonProps) => {
  return (
    <TouchableOpacity
      style={containerStyles}
      disabled={isLoading}
      activeOpacity={0.7}
      className={`!bg-secondary !rounded-xl !min-h-[62px] !justify-center !items-center ${containerClass} ${
        isLoading && "opacity-50"
      }`}
      {...rest}
    >
      <Text
        className={`!text-lg !text-primary !font-psemibold ${textClass}`}
        style={textStyles}
      >
        {label}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({});
