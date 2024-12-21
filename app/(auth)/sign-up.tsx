import React, { useState } from "react";
import { Link, router } from "expo-router";
import { Alert, Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import FormField from "@/components/form-field";
import Button from "@/components/button";

import { images } from "@/constants";
import { createUser } from "@/libs/appwrite";

const SignUp = () => {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async () => {
    if (!form.email || !form.username || !form.password) {
      Alert.alert("Error", "Please fill in all fields!");
    }
    setIsSubmitting(true);

    try {
      await createUser(form.email, form.password, form.username);

      router.replace("/home");
    } catch (error) {
      Alert.alert("Error", (error as Error).message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <SafeAreaView className='h-full bg-primary'>
      <ScrollView>
        <View className='!justify-center !w-full !min-h-[85vh] !px-4 !my-6'>
          <Image
            source={images.logo}
            resizeMode='contain'
            className='!w-[115px] !h-[35px]'
          />

          <Text className='mt-10 text-2xl font-semibold text-white'>
            Sign Up to Aura
          </Text>

          <FormField
            title='Username'
            value={form.username}
            onChangeText={(e) => setForm((prev) => ({ ...prev, username: e }))}
            containerClass='mt-7'
            placeholder='Name'
            style={{}}
          />

          <FormField
            title='Email'
            value={form.email}
            onChangeText={(e) => setForm((prev) => ({ ...prev, email: e }))}
            containerClass='mt-7'
            placeholder='Email'
            style={{}}
          />

          <FormField
            title='Password'
            value={form.password}
            onChangeText={(e) => setForm((prev) => ({ ...prev, password: e }))}
            containerClass='mt-7'
            placeholder='Password'
            style={{}}
          />

          <Button
            label='Sign Up'
            onPress={onSubmit}
            containerClass='mt-7'
            isLoading={isSubmitting}
          />

          <View className='flex-row justify-center !gap-2 pt-5'>
            <Text className='text-lg text-gray-100 font-pregular'>
              Have an account already?
            </Text>

            <Link
              href={"/(auth)/sign-in"}
              className='text-lg font-psemibold text-secondary'
            >
              Sign In
            </Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUp;

const styles = StyleSheet.create({});
