import React from "react";

import {
    createSwitchNavigator,
    createAppContainer
} from 'react-navigation';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createStackNavigator } from '@react-navigation/stack';

// SCREENS
import SignIn from './components/auth';
import News from './components/news';
import Games from './components/games';

// const AppStack = createBottomTabNavigator({
//     News: News,
//     Games: Games
// });

// const AuthStack = createStackNavigator({
//     SignIn: SignIn
// })

const AppNavigator = createStackNavigator();

export const RootNavigator = () => {
    // return createAppContainer(createSwitchNavigator({
    //     App: AppStack,
    //     Auth: AuthStack
    // }, {
    //     initialRouteName: 'Auth'
    // }))

    return createAppContainer(AppNavigator)
}