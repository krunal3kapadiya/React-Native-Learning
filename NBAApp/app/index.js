import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

import { RootNavigator } from './routes';

export default class App extends Component {
  render() {
    const Nav = RootNavigator();
    return (
      <View style={styles.sectionContainer}>
        {/* <Nav /> */}
        <Text>Welcome to Container</Text>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  sectionContainer: {
    backgroundColor: '#f4f4f4',
    alignItems: 'center'
  },
});
