import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Button from './components/Button';

const Menu = ({ onMenuToggle, onGameReset }) => (
  <View style={styles.root}>
    <Button color="#fff" style={styles.menu} onPress={onGameReset}>
      RESET GAME
    </Button>
    <Button color="#fff" style={styles.menu} onPress={onMenuToggle}>
      BACK TO GAME
    </Button>
  </View>
);

const styles = StyleSheet.create({
  root: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(20,13,10,0.9)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  menu: {
    margin: 8,
  },
});

export default Menu;
