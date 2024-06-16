import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { CounterScreen } from './src/screens/CounterScreen';
import { HomeScreen } from './src/screens/HomeScreen';
import Icon from 'react-native-vector-icons/Ionicons'
import { ApiScreen } from './src/screens/ApiScreen';

const Stack = createStackNavigator()
const Tab = createBottomTabNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name='HomeScreen' component={HomeScreen} options={{ headerShown: false }} />
      <Stack.Screen name='CounterScreen' component={CounterScreen} />
      <Stack.Screen name='ApiScreen' component={ApiScreen} />


    </Stack.Navigator>
  )
}


const MyTabs = () => {
  return (
    <Tab.Navigator 
    screenOptions={{
      tabBarShowLabel: false, 
      tabBarStyle: {
        justifyContent: 'center', 
        alignItems: 'center', 
      },
      tabBarItemStyle: {
        justifyContent: 'center', 
        alignItems: 'center', 
      },
    }}
    >
      <Tab.Screen name="HomeScreen" component={MyStack} options={{ 
        tabBarIcon: ({color, size}) => (
          <Icon name='home' color={'black'} size={25}/>
        )
      }} />
      <Tab.Screen name="CounterScreen" component={CounterScreen}  options={{ 
        tabBarIcon: ({color, size}) => (
          <Icon name='timer' color={'black'} size={25}/>
        ), 
        tabBarLabel: () => null

      }} />
      <Tab.Screen name="ApiScreen" component={ApiScreen}options={{ 
        tabBarIcon: ({color, size}) => (
          <Icon name='planet' color={'black'} size={25}/>
        ),
        tabBarLabel: () => null
      }} />
    </Tab.Navigator>
  );
};

const App = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        <MyTabs />
      </NavigationContainer>
    </GestureHandlerRootView>
  );
};

export default App;
