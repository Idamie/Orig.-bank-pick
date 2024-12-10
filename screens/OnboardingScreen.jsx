import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import Swiper from 'react-native-swiper';
import { StatusBar } from 'expo-status-bar';
import CustomButton from '../components/CustomButton';



const OnboardingScreen = () => {
    const onboardingData = [
        {
            imageUrl: require('../assets/ob1.png'),
            title: 'Fastest Payment in the world',
            description: ' Integrate multiple payment methoods to help you up the process quickly'
        },
        {
            imageUrl: require('../assets/ob2.png'),
            title: 'The most Secure Platfrom for Customer',
            description: ' Built-in Fingerprint, face recognition and more, keeping you completely safe'
        },
        {
            imageUrl: require('../assets/ob3.png'),
            title: 'Paying for Everything is Easy and Convenient',
            description: 'Built-in Fingerprint, face recognition and more, keeping you completely safe'
        }
    ]
  return (
    <View style={styles.container}>
    <StatusBar translucent={true} backgroundColor={styles.description.color} />
    <Swiper
      paginationStyle={styles.paginationStyle}
      dotStyle={styles.dotStyle}
      activeDotStyle={styles.activeDotStyle}
      autoplay
    >
   
   {onboardingData.map((data, index)=>(
       <View key={index} style={styles.onboardingContainer}>
       <Image source={data.imageUrl} />

       <Text style={styles.title}>{data.title}</Text>
       <Text style={styles.description}>
       {data.description}
       </Text>
       <CustomButton
         title={"Next"}
         textColor={"white"}
         backgroundColor={"#0066FF"}
         style={styles.buttonContainer}
       />
     </View>
   ))}
     
    </Swiper>
  </View>
);
};

export default OnboardingScreen;

const styles = StyleSheet.create({
container: {
  alignItems: "center",
  justifyContent: "center",
  height: "100%",
  backgroundColor: '#161622'
},

onboardingContainer: {
  justifyContent: "center",
  alignItems: "center",
  flex: 1,
  padding: 10,
},

// on2Image: {
//   width: 250,
//   height: 260,
// },
description: {
  fontSize: 14,
  color: "#7E848D",
  fontWeight: "regular",
  textAlign: "center",
  marginTop: 20,
},

title: {
  fontSize: 26,
  color: "white",
  fontWeight: "bold",
  textAlign: "center",
  marginTop: 60,
},
buttonContainer: {
  position: "absolute",
  bottom: 30,
},

paginationStyle: {
  position: "absolute",
  top: 220,
},
dotStyle: {
  width: 6,
  height: 6,
  borderRadius: 3,
  backgroundColor: '#41455E'
},
activeDotStyle: {
  width: 19,
  height: 6,
  borderRadius: 3,
  backgroundColor: "#0066FF",
},
twoButtonContainer: {
  flexDirection: "row",
  position: "absolute",
  bottom: 30,
  justifyContent: "center",
  alignItems: "center",
  gap: 15,
},
twoButton: {
  width: 157,
},
});

