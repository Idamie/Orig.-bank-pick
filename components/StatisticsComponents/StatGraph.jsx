import { StyleSheet, Text, Image, View } from 'react-native'
import React from 'react'

const StatGraph = () => {
  return (
    <View style={styles.imageContainer}>
        <Image source={require("../../assets/Graph.png")} />
    </View>
  )
}

export default StatGraph

const styles = StyleSheet.create({
imageContainer: {
    alignItems: "center",
    justifyContent: "center",
    width: 335,
    Height: 204,
    paddingTop: 30
},
})