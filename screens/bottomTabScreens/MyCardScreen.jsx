import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import TopSection from '../../components/HomeComponents/TopSection'
import CardComponent from '../../components/HomeComponents/CardComponent'
import Option from '../../components/HomeComponents/Option'
import TransactionHistory from '../../components/HomeComponents/TransactionHistory'

const MyCardScreen = () => {
  return (
    <View style={styles.container}>
      <TopSection2/>
      <CardComponent2/>
      <Option2/>
      <TransactionHistory2/>
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