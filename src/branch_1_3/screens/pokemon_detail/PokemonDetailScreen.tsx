import * as React from 'react';
import {Text, View} from 'react-native';
import {useRoute} from '@react-navigation/native';

export default function PokemonDetailScreen() {
  const {params} = useRoute();

  return (
    <View>
      <Text>Pokemon Number {params?.id || ''}</Text>
    </View>
  );
}
