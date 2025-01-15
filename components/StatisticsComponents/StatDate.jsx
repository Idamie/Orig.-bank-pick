import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const StatDate = () => {
  return (
    <View style={styles.textContainer}>
      <Text  style={styles.textStyle}> Oct </Text>
      <Text style={styles.textStyle}> Nov </Text>
      <Text style={styles.textStyle}> Dec </Text>
      <Text style={styles.textStyle}> Jan </Text>
      <Text style={styles.textStyle}> Feb </Text>
      <Text style={styles.textStyle}> Mar </Text>
        
    </View>
  )
}

export default StatDate

const styles = StyleSheet.create({
    textContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
      },
      textStyle:{
        color: "#A2A2A7",
        fontFamily: "poppins",
        fontSize: 15,
        fontWeight: 400,
      },
      activeDotstyle:{
        backgroundColor: "#0066FF",
        borderRadius: 8,
        width: 47,
        height: 28
      }
})