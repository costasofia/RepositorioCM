import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import LocalizationContext from './../services/localization/LocalizationContext';

import { createStackNavigator } from '@react-navigation/stack';

import Login from './../pages/Login';
import StackLista from './StackLista';
const Stack = createStackNavigator();

function StackLogin({ navigation }) {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Login">
                <Stack.Screen name="Login" component={Login}
                    options={{ headerShown: false, }} />
                <Stack.Screen name="StackLista" component={StackLista}
                    options={{ title: 'App', headerShown: false, }} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default StackLogin; 