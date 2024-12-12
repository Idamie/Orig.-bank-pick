import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { MaterialIcons } from "@expo/vector-icons";

const CustomInput = ({
  label,
  icon,
  placeholder,
  onChangeText,
  value,
  password = false,
  keyboardType,
}) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  // const handleIsPassword = ()=>{
  //     setIsPasswordVisible(!isPasswordVisible)
  // }
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.inputContainer}>
        <MaterialIcons name={icon} size={18} color="#A2A2A7" />
        <TextInput
          placeholder={placeholder}
          onChangeText={onChangeText}
          value={value}
          secureTextEntry={password && isPasswordVisible}
          placeholderTextColor={"#A2A2A7"}
          style={styles.input}
          keyboardType={keyboardType}
        />

        {password && (
          <TouchableOpacity
            onPress={() => setIsPasswordVisible(!isPasswordVisible)}
          >
            <MaterialIcons
              name={isPasswordVisible ? "visibility-off" : "visibility"}
              size={24}
              color="#A2A2A7"
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default CustomInput;

const styles = StyleSheet.create({
  container: {
    marginTop: 18,
  },
  label: {
    fontSize: 14,
    fontWeight: "regular",
    color: "#A2A2A7",
  },

  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#A2A2A7",
    paddingHorizontal: 8,
    paddingVertical: 6,
    marginTop: 10,
    gap: 8,
  },
  input: {
    flex: 1,
    color: "white",
  },
});
