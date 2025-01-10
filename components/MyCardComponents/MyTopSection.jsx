import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const MyTopSection = () => {
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
          <Text style={styles.myCardContainer}> My Cards </Text>
        </View>

        {/* Right Section */}
        <TouchableOpacity>
            <Image source={require('../../assets/Icon1.png')} />
        </TouchableOpacity>
        {/* Right section ends here */}
      </View>
    </View>
  )
}

export default MyTopSection

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
    myCardContainer: {
      fontFamily: "poppins",
      fontSize: 18,
      fontWeight: 500,
      textAlign: "center",
      color: "white",
    }
})