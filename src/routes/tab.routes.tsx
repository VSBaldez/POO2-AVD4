import React from "react";
import { Platform } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import colors from "../styles/colors";

import { MaterialIcons } from "@expo/vector-icons";

import { PlantSelect } from "../pages/PlantSelect";

const AppTab = createBottomTabNavigator();

const AuthRoutes: React.FC = () => (
  <AppTab.Navigator
    tabBarOptions={{
      activeTintColor: colors.green,
      inactiveTintColor: colors.body_light,
      labelPosition: "beside-icon",
      style: {
        height: 0,
        paddingVertical: Platform.OS === "ios" ? 0 : 0,
      },
    }}
  >
    <AppTab.Screen
      name=" "
      component={PlantSelect}
      
    />
  </AppTab.Navigator>
);

export default AuthRoutes;
