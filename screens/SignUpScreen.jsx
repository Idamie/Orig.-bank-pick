import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const SignUpScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.topText}>Sign Up</Text>
    </View>
  )
}

export default SignUpScreen

const styles = StyleSheet.create({
    container: {
        paddingTop: 60,
        paddingHorizontal: 20,
        backgroundColor: "#161622",
        height: "100%",
      },
      topText: {
        fontSize: 32,
        fontWeight: "medium",
        color: "white",
        marginVertical: 12,
      },
})