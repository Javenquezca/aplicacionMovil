import React from 'react'
import { View, Text, StyleSheet} from 'react-native'

export const UserScreen = () => {
  return (
    <View style ={styles.container}>
        <Text>Hola, estamos en user screen</Text>
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