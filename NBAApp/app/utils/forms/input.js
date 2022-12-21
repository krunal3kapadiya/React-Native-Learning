import React, { Component } from "react";
import { StyleSheet, Text, View, TextInput, Picker } from "react-native";

const input = (props) => {
    let templete = null;
    switch (props.type) {
        case "textinput":
            templete =
                <TextInput
                    {...props}
                    style={[styles.input, props.overrideStyle]} />
            break;
        default:
            return templete;
    }
    return templete;
}

const styles = StyleSheet.create({
    input: {
        width: '100%',
        borderBottomWidth: 2,
        borderBottomColor: '#eaeaea',
        fontSize: 16,
        padding: 5,
        marginTop: 10
    }
})
export default input;