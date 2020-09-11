import React from 'react'
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack'
import IntroScreenOne from '../Pages/IntroScreenOne';
import IntroScreenTwo from '../Pages/IntroScreenTwo';

const Stack = createStackNavigator();

export default function IntroStack(){
    return(
        <Stack.Navigator screenOptions = {{cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS}}>
            <Stack.Screen name = "Intro Screen One" component = {IntroScreenOne} options = {{header: props => null, gestureEnabled: true}}></Stack.Screen>
            <Stack.Screen name = "Intro Screen Two" component = {IntroScreenTwo} options = {{header: props => null, gestureEnabled: true}}></Stack.Screen>
        </Stack.Navigator>
    )
}