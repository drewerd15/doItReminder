import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { Card, Button } from "@rneui/themed";
import { Stack, HStack, VStack } from "react-native-flex-layout";
import { useNavigation } from "@react-navigation/native";
const styles = StyleSheet.create({
  center: {
    alignItems: "center",
  },
  space: {
    height: 0,
    width: 0,
  },
});

const Reminder = (props) => {
  const reminder = props.props;
  const navigation = useNavigation();
  console.log("props", props);
  console.log("navigation", navigation);
  return (
    <Card style={styles.center}>
      <Text>{reminder.title} </Text>
      <Text>
        {reminder.frequency} {reminder.reoccurDate}
      </Text>
      <HStack m={4} spacing={8}>
        <Button title="Started" />
        <View style={styles.space} />
        <Button title="Done" />
        <View style={styles.space} />
        <Button
          title="Edit"
          onPress={() => navigation.navigate("Edit", { reminder })}
        />
      </HStack>
    </Card>
  );
};

export default Reminder;
