import { StyleSheet, Text, View, ImageBackground, Image } from "react-native";
import React from "react";

const MyCardComponent = () => {
  return (
    <View style={styles.container}>
      <View style={styles.container2}>
        <ImageBackground source={require("../../assets/map.png")}
          style={styles.imageBackground} >
            {/* Top Images */}
            <View style={styles.topImages}>
                <Image source={require('../../assets/chip.png')}/>
                <Image source={require('../../assets/wave.png')}/>
            </View>
            {/* Top images ends here */}

            {/* Card number */}
            <Text style={styles.cardNumber}>4562   1122   4595   7852</Text>

            {/* Owners name */}
            <Text style={styles.ownersName}>AR Jonson</Text>

            {/* BottomSection */}
            <View style={styles.bottomContainer}>
                {/* Left section */}
                <View style={styles.left}>
                    {/* Expiry date */}
                    <View>
                    <Text style={styles.expire1}>Expiry Date</Text>
                    <Text style={styles.expire2}>24/2000</Text>
                    </View>
                    {/* Expiry date ends her */}

                    {/* CVV */}
                    <View>
                    <Text style={styles.expire1}>CVV</Text>
                    <Text style={styles.expire2}>6986</Text>
                    </View>
                    {/* CVV ends here */}
                </View>
                {/* Left section ends here */}

                {/* Right section */}
                <View style={styles.right}>
                    <Image source={require('../../assets/mcard.png')}/>
                    <Text style={styles.expire2}>Mastercard</Text>
                </View>
            </View>
        </ImageBackground>
      </View>
    </View>
  );
};

export default MyCardComponent;

const styles = StyleSheet.create({
  imageBackground: {
    height: 180,
  },
  container2: {
    backgroundColor: "#27273A",
    borderRadius: 16,
    padding: 18
  },
  container: {
    marginTop: 40,
  },
  topImages:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  cardNumber:{
    fontSize: 24,
    fontWeight: 'regular',
    color: 'white',
    textAlign: 'center',
    marginTop: 20
  },
  ownersName:{
    fontSize: 13,
    fontWeight: 'regular',
    color: 'white',
    marginTop: 20
  },
  expire1:{
    fontSize: 9,
    fontWeight: 'regular',
    color: '#A2A2A7'
  },
  expire2:{
    fontSize: 13,
    fontWeight: 'regular',
    color: 'white'
  },
  left:{
    flexDirection: 'row',
    alignItems: 'center',
    gap: 30
  },
 bottomContainer:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop:20
 },
 right:{
    flexDirection: 'column',
    alignItems: 'center',
 }
});
