import React, { useState } from "react";
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import { icons } from "@/constants";

interface FormFieldProps {
  title: string;
  value: string;
  onChangeText: (value: string) => void;
  className?: string;
  containerClass?: string;
  placeholder?: string;
  style?: any;
}

const FormField = ({
  title,
  value,
  containerClass,
  placeholder,
  onChangeText,
  ...rest
}: FormFieldProps) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <View className={`${containerClass}`}>
      <Text className='text-base text-gray-100 font-pmedium'>{title}</Text>

      <View className='flex flex-row items-center w-full h-16 px-4 mt-2 border-2 bg-black-100 rounded-2xl border-black-200 focus:border-secondary'>
        <TextInput
          className='flex-1 h-full !pt-4 text-base text-white font-psemibold'
          value={value}
          placeholder={placeholder}
          placeholderTextColor='#7B7B8B'
          onChangeText={onChangeText}
          secureTextEntry={title === "Password" && !showPassword}
          {...rest}
        />

        {title === "Password" && (
          <TouchableOpacity
            className='items-center justify-center w-10 h-10'
            onPress={() => setShowPassword(!showPassword)}
          >
            <Image
              source={!showPassword ? icons.eye : icons.eyeHide}
              className='!w-6 !h-6'
              resizeMode='contain'
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default FormField;

const styles = StyleSheet.create({});
