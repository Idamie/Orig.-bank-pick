import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const StatDate = () => {
  return (
    <View style={styles.textContainer}>
      <Text> Oct </Text>
      <Text> Nov </Text>
      <Text> Dec </Text>
      <Text> Jan </Text>
      <Text> Feb </Text>
      <Text> Mar </Text>
    </View>
  )
}

export default StatDate

const styles = StyleSheet.create({
    textContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        color: "white",
        fontFamily: "poppins",
        fontSize: 18,
        fontWeight: 400,
        
      }
})