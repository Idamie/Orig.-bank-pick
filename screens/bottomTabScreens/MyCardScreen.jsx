import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import MyCardComponent from '../../components/MyCardComponents/MyCardComponent'
import MyTopSection from '../../components/MyCardComponents/MyTopSection'
import MyTransactionHistory from '../../components/MyCardComponents/MyTransactionHistory'

const MyCardScreen = () => {
  return (
    <View style={styles.container}>
      <MyTopSection/>
      <MyCardComponent/>
      <MyTransactionHistory/>

      <View>
        <Text style={styles.textContainer}> Monthly spending limit</Text>
        <Image source={require("../../assets/Slider.png")} style={styles.imageContainer} />
      </View>
    </View>
  )
}

export default MyCardScreen

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    paddingHorizontal: 14,
    backgroundColor: "#161622",
    height: "100%",
  },
  textContainer: {
    fontSize: 18,
    fontWeight: 500,
    color: "white"
  },
  imageContainer: {
    backgroundColor: "#27273A",
    borderRadius: 16,
    padding: 18,
    alignItems: "center",
    justifyContent: "center"
  }
})