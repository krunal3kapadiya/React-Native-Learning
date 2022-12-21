import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
} from 'react-native';

class NewsComponent extends Component {
    render() {
        return (
            <View style={styles.sectionContainer}>
                <Text>NewsComponent</Text>
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

export default NewsComponent;