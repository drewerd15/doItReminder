import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Reminder from "./reminder";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Welcome to the party! Set up your first reminder below!</Text>
      <Reminder />
    </View>
  );
};

export default HomeScreen;
