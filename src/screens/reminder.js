import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { Card, Button } from "@rneui/themed";
import { Stack, HStack, VStack } from "react-native-flex-layout";
const styles = StyleSheet.create({
  center: {
    alignItems: "center",
  },
  space: {
    height: 0,
    width: 0,
  },
});

const Reminder = () => {
  return (
    <Card style={styles.center}>
      <Text>Clean the Bathroom </Text>
      <Text>Daily 4:00pm</Text>
      <HStack m={4} spacing={8}>
        <Button title="Started" />
        <View style={styles.space} />
        <Button title="Done" />
        <View style={styles.space} />
        <Button title="Edit" />
      </HStack>
    </Card>
  );
};

export default Reminder;
