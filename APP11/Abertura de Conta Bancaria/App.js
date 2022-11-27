import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import FirstPage from './pages/FirstPage';
import SecondPage from './pages/SecondPage';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="FirstPage">
        <Stack.Screen
          name="=Abertura de Conta - Banco Laranja"
          component={FirstPage}
          options={{
            title: 'Primeira Tela',
            headerStyle: {
              backgroundColor: '#FF7900',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <Stack.Screen
          name="SecondPage"
          component={SecondPage}
          options={{
            title: 'Segunda Tela',
            headerStyle: {
              backgroundColor: '#FF7900',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;