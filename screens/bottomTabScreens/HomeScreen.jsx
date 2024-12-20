import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import TopSection from '../../components/HomeComponents/TopSection'
import CardComponent from '../../components/HomeComponents/CardComponent'
import Option from '../../components/HomeComponents/Option'
import TransactionHistory from '../../components/HomeComponents/TransactionHistory'

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <TopSection/>
      <CardComponent/>
      <Option/>
      <TransactionHistory/>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    paddingHorizontal: 14,
    backgroundColor: "#161622",
    height: "100%",
  },
})