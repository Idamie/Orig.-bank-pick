import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const TopSection = () => {
  return (
    <View>
      <View style={styles.mainContainer}>
        {/* Left Section */}
        <View style={styles.leftSection}>
            <Image source={require('../../assets/user.png')} />
            {/* Text Section */}
            <View>
                <Text style={styles.welcome}>Welcome back,</Text>
                <Text style={styles.userName}>Tanya Myroniuk</Text>
            </View>
        </View>
        {/* Left Section ends here */}

        {/* Right Section */}
        <TouchableOpacity>
            <Image source={require('../../assets/search.png')} />
        </TouchableOpacity>
        {/* Right section ends here */}
      </View>
    </View>
  )
}

export default TopSection

const styles = StyleSheet.create({
    welcome:{
        fontSize: 12,
        fontWeight: 'regular',
        color: '#7E848D'
    },
    userName:{
        fontSize: 18,
        fontWeight: 'medium',
         color: "white"
    },
    leftSection:{
        flexDirection: 'row',
        alignItems: 'center',
        gap: 20
    },
    mainContainer:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    }
})