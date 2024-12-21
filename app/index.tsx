import React from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";

import "react-native-url-polyfill/auto";

import { images } from "@/constants";
import { router } from "expo-router";

import Button from "@/components/button";

const App = () => {
  const handlePress = () => {
    router.push("/(auth)/sign-in");
  };

  return (
    <SafeAreaView className='h-full bg-primary'>
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View className='!items-center !justify-center !w-full !min-h-[85vh] !px-4'>
          <Image
            source={images.logo}
            className='!w-[130px] !h-[84px]'
            resizeMode='contain'
          />

          <Image
            source={images.cards}
            className='!max-w-[380px] !h-[300px]'
            resizeMode='contain'
          />

          <View className='!mt-5'>
            <Text className='text-3xl font-bold text-center text-white '>
              Discover Endless Possibilities with{" "}
              <Text className='!relative text-secondary-200'>
                Aora
                <View>
                  <Image
                    source={images.path}
                    className='!w-[136px] !h-[15px] absolute -bottom-4 !-right-10'
                    resizeMode='contain'
                  />
                </View>
              </Text>
            </Text>
          </View>

          <Text className='text-sm text-center text-gray-100 mt-7 font-pregular'>
            Where creativity meets innovations: embark on a journey of limitless
            exploration with Aora
          </Text>

          <Button
            onPress={handlePress}
            label='Continue with Email'
            containerClass='w-full mt-7'
          />
        </View>
      </ScrollView>

      <StatusBar style='light' backgroundColor='#161622' />
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({});
