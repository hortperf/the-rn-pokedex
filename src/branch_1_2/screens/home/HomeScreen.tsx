import * as React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import PokemonCard from '../../../components/cards/PokemonCard';
import {listPokemons} from '../../services/PokemonClient';

export default function HomeScreen() {
  // ================================================================================
  // Branch 1 2
  // ================================================================================
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    callListPokemons();
  });

  const callListPokemons = async () => {
    const response = await listPokemons();
    setData(
      // we have to map and build our own result because `listPokemons` service returns an objet
      // like this `[{ name: "pokemon", "mewtwo": "https://pokeapi.co/api/v2/pokemon/150/" }]`
      response.results.map((value, index) => ({
        ...value,
        id: index + 1,
        sprites: {
          front_default: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
            index + 1
          }.png`,
        },
      })),
    );
  };
  // ================================================================================

  return (
    <View style={styles.wrapper}>
      <FlatList
        keyExtractor={item => `pokemon_${item.id}`}
        // ================================================================================
        // Branch 1 2
        // ================================================================================
        data={data}
        // ================================================================================
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
