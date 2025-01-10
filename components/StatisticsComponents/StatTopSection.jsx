import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const StatTopSection = () => {
  return (
    <View>
      <View style={styles.mainContainer}>
        {/* Left Section */}
        <View style={styles.leftSection}>
          <TouchableOpacity>
            <Image source={require('../../assets/Icon2.png')} />
          </TouchableOpacity>
            {/* Text Section */}
        </View>
        {/* Left Section ends here */}

        <View>
          <Text style={styles.myStatContainer}> Statistics </Text>
        </View>

        {/* Right Section */}
        <TouchableOpacity>
            <Image source={require('../../assets/Alarm.png')} />
        </TouchableOpacity>
        {/* Right section ends here */}
      </View>

      <View style={styles.textContainer}>
          <Text style={styles.descriptionContainer}> Current Balance </Text>
          <Text style={styles.amountContainer}> $8,545.00 </Text>
      </View>

    </View>
  )
}

export default StatTopSection

const styles = StyleSheet.create({
    leftSection:{
        flexDirection: 'row',
        alignItems: 'center',
        gap: 20
    },
    mainContainer:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    myStatContainer: {
      fontFamily: "poppins",
      fontSize: 18,
      fontWeight: 500,
      textAlign: "center",
      color: "white",
    },
    textContainer: {
        textAlign: "center",
        justifyContent: "center",
        fontFamily: "poppins",
        paddingTop: 20,
    },
    descriptionContainer: {
      fontWeight: 400,
      fontSize: 18,
      color: "#A2A2A7",
      textAlign: "center"
  },
    amountContainer: {
        fontWeight: 500,
        fontSize: 26,
        color: "white",
        textAlign: "center"
    },
})