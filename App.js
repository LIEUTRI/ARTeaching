import 'react-native-gesture-handler';
import React from 'react'
import { StatusBar } from 'react-native'
import { ViroUtils } from '@citychallenge/react-viro';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import MainScreen from './js/MainScreen';
import Chooser from './js/components/Chooser';
import AR from './js/components/AR';

const Stack = createStackNavigator()

export default function () {

  React.useEffect(() => {
    StatusBar.setHidden(true)
    const isARSupportedOnDevice = ViroUtils.isARSupportedOnDevice;
    isARSupportedOnDevice(_handleARNotSupported, _handleARSupported);
  }, [])

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName='MainScreen'>
        <Stack.Screen name='MainScreen' component={MainScreen} />
        <Stack.Screen name='Chooser' component={Chooser} />
        <Stack.Screen name='AR' component={AR} />
      </Stack.Navigator>
    </NavigationContainer>
  )

  function _handleARSupported() {
    console.log("AR supported");
  }
  function _handleARNotSupported(reason) {
    console.log("AR not supported, with reason: " + reason);
  }
}


