import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
} from 'react-native';

class GamesComponent extends Component {
    render() {
        return (
            <View style={styles.sectionContainer}>
                <Text>GamesComponent</Text>
            </View>
        );
    }
};

const styles = StyleSheet.create({
    sectionContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5fcff',
    },
});

export default GamesComponent;