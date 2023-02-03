import React from 'react';
import { View } from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import SettingsScreen from './Settings';
import MenuScreen from './Menu';
import FotosScreen from './Fotos';
import InfoScreen from './Info';
import { NavigationContainer } from '@react-navigation/native';

const Tab = createMaterialBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Settings"
        activeColor="#063970"
        inactiveColor="#1e81b0"
        barStyle={{ backgroundColor: '#abdbe3' }}
      >
        <Tab.Screen
          name="Settings"
          component={SettingsScreen}
          options={{
            tabBarLabel: 'Settings',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="tree" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="Menu"
          component={MenuScreen}
          options={{
            tabBarLabel: 'Menu',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="food" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="Fotos"
          component={FotosScreen}
          options={{
            tabBarLabel: 'Fotos',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="image" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="Info"
          component={InfoScreen}
          options={{
            tabBarLabel: 'Info',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="information" color={color} size={26} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const App = () => {
  return (
    <View style={{ flex: 1 }}>
      <BottomTabNavigator />
    </View>
  );
};

export default App;
