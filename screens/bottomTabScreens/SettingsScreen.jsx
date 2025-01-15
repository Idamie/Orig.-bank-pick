import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import SetTopSection from '../../components/SettingsComponents/SetTopsection'
import SetComponents from '../../components/SettingsComponents/SetComponents'

const SettingsScreen = () => {
  return (
    <View style={styles.container}>
      <SetTopSection/>
      <SetComponents/>
    </View>
  )
}

export default SettingsScreen

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    paddingHorizontal: 14,
    backgroundColor: "#161622",
    height: "100%",
  },
})