import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const Option = () => {
    const optionData = [
        {
            imgSrc: require('../../assets/sent.png'),
            text: 'Sent'
        },
        {
            imgSrc: require('../../assets/get.png'),
            text: 'Receive'
        },
        {
            imgSrc: require('../../assets/loan.png'),
            text: 'Loan'
        },
        {
            imgSrc: require('../../assets/add.png'),
            text: 'Topup'
        },
    ]
  return (
    <View style={styles.container}>
   <View style={styles.mainContainer}>
   {optionData.map((data, index)=>(
       
       <TouchableOpacity key={index} style={styles.buttonContainer}>
           <Image source={data.imgSrc} />
           <Text style={styles.textStyle}>{data.text}</Text>
       </TouchableOpacity>
   
    ))}
   </View>
    </View>
  )
}

export default Option

const styles = StyleSheet.create({
    textStyle:{
        fontSize: 13,
        fontWeight: 'regular',
        color: '#A2A2A7'
    },
    buttonContainer:{
        flexDirection: 'column',
        alignItems: 'center'
    },
    mainContainer:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 35
    },
    container:{
        marginTop: 30
    }
})