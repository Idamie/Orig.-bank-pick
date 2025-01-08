import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MyCardComponent from '../../components/MyCardComponents/MyCardComponent'
import MyTopSection from '../../components/MyCardComponents/MyTopSection'
import MyTransactionHistory from '../../components/MyCardComponents/MyTransactionHistory'

const MyCardScreen = () => {
  return (
    <View style={styles.container}>
      <MyCardComponent/>
      <MyTopSection/>
      <MyTransactionHistory/>
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
})