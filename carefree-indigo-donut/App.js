import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SplashScreen from './screens/SplashScreen';
import CountrySelect from './screens/CountrySelect';
import AuthScreen from './screens/AuthScreen';
import Challenges from './screens/Challenges';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="CountrySelect" component={CountrySelect} />
        <Stack.Screen name="Auth" component={AuthScreen} />
        <Stack.Screen name="Challenges" component={Challenges} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
