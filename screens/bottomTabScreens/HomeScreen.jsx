import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import TopSection from '../../components/HomeComponents/TopSection'
import CardComponent from '../../components/HomeComponents/CardComponent'
import Option from '../../components/HomeComponents/Option'

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <TopSection/>
      <CardComponent/>
      <Option/>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    paddingHorizontal: 10,
    backgroundColor: "#161622",
    height: "100%",
  },
})