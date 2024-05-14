import * as React from 'react';
import {StyleSheet, View} from 'react-native';
import pokemon from '../../mock/data.json';
import PokemonCard from '../../components/cards/PokemonCard';

export default function HomeScreen() {
  return (
    <View style={styles.wrapper}>
      <PokemonCard data={pokemon[0]} />
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    padding: 8,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});
