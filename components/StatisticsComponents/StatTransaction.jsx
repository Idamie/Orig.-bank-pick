import { StyleSheet, Text, TouchableOpacity, View, ScrollView, Image } from 'react-native'
import React from 'react'

const StatTransaction = () => {
    const transactionData =[
        {
            imgUrl: require('../../assets/apple.png'),
            paymentType: 'Apple Store',
            categories: 'Entertainment',
            amount: '- $5,99',
            color: 'white'
        },
        {
            imgUrl: require('../../assets/spotify.png'),
            paymentType: 'Spotify',
            categories: 'Music',
            amount: '- $12,99',
            color: 'white'
        },
        {
            imgUrl: require('../../assets/trans.png'),
            paymentType: 'Money Transfer',
            categories: 'Transaction',
            amount: '$300',
            color: '#0066FF'
        },
        {
            imgUrl: require('../../assets/groce.png'),
            paymentType: 'Grocery',
            categories: 'Shopping',
            amount: '- $ 88',
            color: 'white'
        },
       
    ]
  return (
    <View style={styles.mainContainer}>
        {/* Top section */}
      <View style={styles.topContainer}>
        <Text style={styles.transaction}>Transaction</Text>
        <TouchableOpacity>
            <Text style={styles.buttonText}>Sell All</Text>
        </TouchableOpacity>
      </View>
      {/* Top section ends here */}

    <ScrollView style={styles.scrollContainer}>
      {transactionData.map((transaction, index)=>(
          <View key={index} style={styles.transactionContainer}>
          {/* Left */}
          <View style={styles.leftSection}>
              <Image source={transaction.imgUrl}/>
              <View>
                  <Text style={styles.paymentType}>{transaction.paymentType}</Text>
                  <Text style={styles.categories}>{transaction.categories}</Text>
              </View>
          </View>
          {/* Left section ends here */}

          {/* Right */}
          <Text style={[styles.paymentType, {color: transaction.color}]}>{transaction.amount}</Text>
      </View>
      ))}
    </ScrollView>
    </View>
  )
}

export default StatTransaction

const styles = StyleSheet.create({
    transaction:{
        fontSize: 18,
        fontWeight: 'medium',
        color: 'white'
    },
    buttonText:{
        fontSize: 14,
        fontWeight: 'medium',
        color: '#0066FF'
    },
    topContainer:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    mainContainer:{
        marginTop: 30
    },
    paymentType:{
        fontSize: 16,
        fontWeight: 'medium',
        color: 'white'
    },
    categories:{
        fontSize: 12,
        fontWeight: 'regular',
        color: '#707070'
    },
    leftSection: {
        flexDirection: 'row',
        alignItems: 'center',
        gap:20
    },
    transactionContainer:{
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: 'space-between',
        marginVertical: 16
    },
    scrollContainer:{
       maxHeight: 210
    }
})