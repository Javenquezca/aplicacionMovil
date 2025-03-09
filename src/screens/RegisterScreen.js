import React from "react";
import { View, Text, StyleSheet } from "react-native";

export const RegisterScreen = () => {
    return (
        <View StyleSheet={styles.container}>
            <Text>Hola, este es el Register</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});