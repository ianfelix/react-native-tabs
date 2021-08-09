import * as React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Home } from '../../screens/Home'
import { Settings } from '../../screens/Settings'
import { Ionicons } from '@expo/vector-icons'

const Tab = createBottomTabNavigator()

export function TabRoutes () {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home" component={Home}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" color={color} size={size}/>
          ),
        }}
      />
      <Tab.Screen name="Settings" component={Settings} options={{
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="settings" color={color} size={size}/>
        ),
      }}/>
    </Tab.Navigator>
  )
}