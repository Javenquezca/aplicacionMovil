import React from "react";
import { View, Text, StyleSheet } from "react-native";

export const LoginScreen = () => {
    return (
        <View StyleSheet={styles.container}>
            <Text>Hola, este es el Login</Text>
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