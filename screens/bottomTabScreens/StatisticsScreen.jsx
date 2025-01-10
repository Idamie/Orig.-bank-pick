import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import StatTopSection from '../../components/StatisticsComponents/StatTopSection'
import StatGraph from '../../components/StatisticsComponents/StatGraph'
import StatTransaction from '../../components/StatisticsComponents/StatTransaction'
import StatDate from '../../components/StatisticsComponents/StatDate'

const StatisticsScreen = () => {
  return (
    <View style={styles.container}>
      <StatTopSection/>
      <StatGraph/>
      <StatDate/>
      <StatTransaction/>
    </View>
  )
}

export default StatisticsScreen

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    paddingHorizontal: 14,
    backgroundColor: "#161622",
    height: "100%",
  },
})