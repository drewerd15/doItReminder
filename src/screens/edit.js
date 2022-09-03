import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { TextInput } from "@react-native-material/core";
const EditScreen = ({ route }) => {
  console.log("route", route);
  const reminder = route.params.reminder;
  const [title, onChangeTitle] = React.useState("someTitle");
  return (
    <View>
      <TextInput value={reminder.title} onChangeText={onChangeTitle} />
      <TextInput value={reminder.frequency} onChangeText={onChangeTitle} />
      <TextInput
        value={reminder.complete ? "Done: true" : "Done: false"}
        onChangeText={onChangeTitle}
      />
    </View>
  );
};

export default EditScreen;
