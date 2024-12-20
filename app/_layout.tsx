import { Slot, Stack } from "expo-router";
import React from "react";
import { View, Text, StyleSheet } from "react-native";

import "../global.css";

const RootLayout = () => {
  return (
    <Stack>
      <Stack.Screen name='index' options={{ headerShown: false }} />
      <Stack.Screen name='profile' />
    </Stack>
  );
};

export default RootLayout;
