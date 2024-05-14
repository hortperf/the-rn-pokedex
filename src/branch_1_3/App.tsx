import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './screens/home/HomeScreen';
import PokemonDetailScreen from './screens/pokemon_detail/PokemonDetailScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerTitle: 'Pokedex',
          }}
        />
        {/* ================================================================================
        Branch 1 3
        ================================================================================ */}
        <Stack.Screen
          name="PokemonDetails"
          component={PokemonDetailScreen}
          options={{
            headerTitle: 'Pokemon',
          }}
        />
        {/* ================================================================================ */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
