import { Stack } from "expo-router";
import React from 'react';
import { StyleSheet } from 'react-native';

export default function RootLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
    </Stack>
  )
}

const styles = StyleSheet.create({})
