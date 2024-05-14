import * as React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import pokemons from '../../mock/data.json';
import PokemonCard from '../../../components/cards/PokemonCard';

export default function HomeScreen() {
  return (
    <View style={styles.wrapper}>
      <FlatList
        keyExtractor={(item) => `pokemon_${item.id}`}
        data={pokemons}
        renderItem={({item}) => <PokemonCard data={item} />}
        numColumns={3}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    padding: 8,
    alignItems: 'center',
  },
});
