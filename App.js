import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import Form from './src/pages/Form/index';
import Account from './src/pages/Account/index';
import Home from './src/pages/Home/index';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="home"
          component={Home}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="form"
          component={Form}
          options={{
            title: "Cadastro de conta",
            headerStyle: {
              backgroundColor: '#32a058',
            }
          }}
        />
        <Stack.Screen
          name="account"
          component={Account}
          options={{
            title: "Dados informados",
            headerStyle: {
              backgroundColor: '#1dbdd4',
            }
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
