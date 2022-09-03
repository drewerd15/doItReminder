import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Reminder from "./reminder";
const d = new Date();
let text = d.toTimeString();

const tempProps = [
  {
    id: 1,
    title: "Take Pills",
    frequency: "Daily",
    reoccurDate: "",
    plannedStartTime: d,
    startTime: d,
    complete: false,
    duration: 150000,
  },
  {
    id: 2,
    title: "Walk Dogs",
    frequency: "Daily",
    reoccurDate: "",
    plannedStartTime: d,
    startTime: d,
    complete: false,
    duration: 150000,
  },
  {
    id: 3,
    title: "Take out Trash",
    frequency: "Weekly",
    reoccurDate: "Tuesday",
    plannedStartTime: d,
    startTime: d,
    complete: false,
    duration: 150000,
  },
  {
    id: 4,
    title: "Scream",
    frequency: "Weekly",
    reoccurDate: "Friday",
    plannedStartTime: d,
    startTime: d,
    complete: false,
    duration: 150000,
  },
];
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Welcome to the party! Set up your first reminder below!</Text>
      {tempProps.map((reminder) => {
        return <Reminder props={reminder} />;
      })}
    </View>
  );
};

export default HomeScreen;
