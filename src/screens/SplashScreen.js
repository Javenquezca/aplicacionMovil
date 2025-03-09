import React, { useEffect } from "react";
import { View, Text, StyleSheet, Image } from "react-native";

export const SplashScreen = () => {
    const navegation = useNavigation();

    useEffect(() => {
        const timer = setTimeout(() => {
            navegation.replace('MainTabs')
        }, 3000)
        return () => clearTimeout(timer)
    }, [navegation])

    return (
        <View style={styles.container}>
            <Text>Hola estoy en SplashScreen</Text>
            <Image source={require('../../assets/cellphone.jpeg')} style={styles.logo}></Image>
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

    logo: {
        height: 200,
        width: 200,
        resizeMode: 'contain',
        alignItems: 'center',
        justifyContent: 'center',
    }
});