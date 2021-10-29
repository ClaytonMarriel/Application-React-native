import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Home from './src/pages/Home'
import StartTraining from './src/pages/StartTraining'
import { Image } from 'react-native';

import {useFonts} from 'expo-font'

export default function App() {
  const Stack = createNativeStackNavigator()

const [loaded] = useFonts({
    NeuzeitSBook: require('./assets/fonts/NeuzeitSBook.ttf'),
  });
  
  if (!loaded) {
    return null;
  }

  return (

    <NavigationContainer>
      <Stack.Navigator initialRouteName="Pedalar"
        screenOptions={{ headerTitleAlign: 'center' }}
        options={{ title: 'Pedalar' }}
      >
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: 'Pedalar',
            headerRight: () => (
              <Image
                source={require('./assets/config.png')}
              />
            ),
            headerLeft: () => (
              <Image
                source={require('./assets/back.png')}
              />
            ),
          }}
        />

        <Stack.Screen
          name="StartTraining"
          component={StartTraining}
          options={{
            title: 'Pedalar',
            headerRight: () => (
              <Image
                source={require('./assets/config.png')}
              />
            ),
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

