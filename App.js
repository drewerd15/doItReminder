import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import LandingScreen from "./src/screens/test";
import HomeScreen from "./src/screens/home";
import EditScreen from "./src/screens/edit";
const RootStack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator>
        <RootStack.Screen name="Landing" component={LandingScreen} />
        <RootStack.Screen name="Home" component={HomeScreen} />
        <RootStack.Screen name="Edit" component={EditScreen} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default App;
