import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer, DarkTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './App/modules/home';
import Detail from './App/modules/details';
import List from './App/modules/cardList';
import Search from './App/modules/search';
import TVShows from './App/modules/tvShows';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const StackScreens1 = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Movies" component={Home}/>
      <Stack.Screen name="List" component={List} options={({ route }) => ({ title: route.params.title })} />
      <Stack.Screen name="Detail" component={Detail} options={({ route }) => ({ headerShown: false })} />
    </Stack.Navigator>
  )
}

const DrawerScreens = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Movies" component={StackScreens1} />
      <Drawer.Screen name="Search" component={Search} />
      <Drawer.Screen name="TVShows" component={TVShows} />
    </Drawer.Navigator>
  )
}

const StackScreens2 = () => { //See copy to see dooubt
  return (
    <Stack.Navigator>
      <Stack.Screen name="Movies" component={DrawerScreens} />
      <Stack.Screen name="Search" component={Search} />
    </Stack.Navigator>
  )
}

export default function App() {
  //Error Status bar text and icon color not changing to white
  return (
    <NavigationContainer theme={DarkTheme}>
      <StatusBar barStyle="light-content" />
      <DrawerScreens />
    </NavigationContainer>

  );
}
