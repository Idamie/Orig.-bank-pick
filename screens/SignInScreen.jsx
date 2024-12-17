import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import CustomInput from "../components/CustomInput";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import CustomButton from "../components/CustomButton";

const SignInScreen = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')

//   Console logs for email and password so as to see the values of your email and password input.
//   console.log('EMAIL VALUE', email);
//   console.log('PASSWORD VALUE', password)

  return (
    <View style={styles.container}>
      {/* Go back button */}
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      >
        <MaterialIcons name="chevron-left" color="white" size={24} />
      </TouchableOpacity>
      {/* Header text or top text */}
      <Text style={styles.topText}>Sign In</Text>

      {/* Custom Inputs */}
      <CustomInput
        placeholder={"Enter your email"}
        icon={"mail"}
        keyboardType={"email-address"}
        label={"Email Address"}
        value={email}
        onChangeText={setEmail}
      />
      <CustomInput
        placeholder={"Enter your password"}
        icon={"lock"}
        keyboardType={"default"}
        password={true}
        label={"Password"}
        value={password}
        onChangeText={setPassword}
      />

{/* Sign in button */}
      <CustomButton
        title={"Sign in"}
        textColor={"white"}
        backgroundColor={"#0066FF"}
        style={styles.buttonContainer}
        onPress={() => navigation.navigate("bottomTab")}
      />

{/* Bottom text or New user sign up text */}
      <Text style={styles.text1}>
        I’m a new user. <Text style={styles.text2} onPress={()=>navigation.navigate('signup')}>Sign Up</Text>{" "}
      </Text>
    </View>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({
  container: {
    paddingTop: 60,
    paddingHorizontal: 20,
    backgroundColor: "#161622",
    height: "100%",
  },
  backButton: {
    width: 42,
    height: 42,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 21,
    backgroundColor: "#1E1E2D",
  },
  topText: {
    fontSize: 32,
    fontWeight: "medium",
    color: "white",
    marginVertical: 12,
  },
  buttonContainer: {
    marginTop: 40,
  },
  text1: {
    fontSize: 14,
    fontWeight: "regular",
    color: "#A2A2A7",
    textAlign: "center",
    marginTop: 20,
  },
  text2: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#0066ff",
  },
});
