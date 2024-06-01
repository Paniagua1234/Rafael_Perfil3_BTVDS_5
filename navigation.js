import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';


import pantalla1 from './screens/pantalla1';
import pantalla2 from './screens/pantalla2';


const Tab = createBottomTabNavigator();

function MyTabs() {
    return(
        <Tab.Navigator screenOptions={{tabBarActiveTintColor: 'red'}}>
            <Tab.Screen 
            name='Cards' 
            component={pantalla1}
            options={{
                headerShown: false,
            }}
            />
            <Tab.Screen 
            name='Comidas' 
            component={pantalla2}
            options={{
                headerShown: false,
            }}
            />
        </Tab.Navigator>
    );
}

export default function Navigation() {
    return(
        <NavigationContainer>
            <MyTabs/>
        </NavigationContainer>
    );
}