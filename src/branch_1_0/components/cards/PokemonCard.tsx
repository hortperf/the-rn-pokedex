import * as React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {Pokemon} from 'pokenode-ts';

type Props = {
  data: Pokemon;
  onPress?: () => void | null;
};

export default function PokemonCard({data, onPress}: Props) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      {data.sprites.front_default && (
        <Image
          style={styles.sprite}
          resizeMode="contain"
          source={{uri: data.sprites.front_default}}
        />
      )}
      <Text style={styles.name}>{data.name}</Text>
    </TouchableOpacity>
  );
}

// custom styles...
const styles = StyleSheet.create({
  container: {
    width: 120,
    height: 150,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 12,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  sprite: {
    width: '100%',
    height: 80,
    marginBottom: 8,
  },
  name: {
    fontSize: 12,
    fontWeight: 'bold',
  },
});
