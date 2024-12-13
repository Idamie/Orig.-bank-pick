import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { MaterialIcons } from "@expo/vector-icons";
import CustomInput from "../components/CustomInput";
import CustomButton from "../components/CustomButton";

const SignUpScreen = () => {
  const navigation = useNavigation();
  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
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
      <Text style={styles.topText}>Sign Up</Text>
      {/* Custom Inputs */}
      <CustomInput
        icon={"person"}
        label={"Full Name"}
        keyboardType={"default"}
        value={fullName}
        onChangeText={setFullName}
        placeholder={"Enter your full name"}
      />

      <CustomInput
        label={"Phone Number"}
        icon={"call"}
        keyboardType={"phone-pad"}
        value={phoneNumber}
        onChangeText={setPhoneNumber}
        placeholder={"Enter your phone number"}
      />

      <CustomInput
        label={"Email Address"}
        icon={"mail"}
        keyboardType={"email-address"}
        value={email}
        onChangeText={setEmail}
        placeholder={"Enter your email address"}
      />

      <CustomInput
        label={"Password"}
        icon={"lock"}
        value={password}
        onChangeText={setPassword}
        password={true}
        keyboardType={"default"}
        placeholder={"Enter your password"}
      />

      {/* Sign in button */}
      <CustomButton
        title={"Sign Up"}
        textColor={"white"}
        backgroundColor={"#0066FF"}
        style={styles.buttonContainer}
      />

      {/* Bottom text or New user sign up text */}
      <Text style={styles.text1}>
        Already have an account.{" "}
        <Text
          style={styles.text2}
          onPress={() => navigation.navigate("signin")}
        >
          Sign in
        </Text>{" "}
      </Text>
    </View>
  );
};

export default SignUpScreen;

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
