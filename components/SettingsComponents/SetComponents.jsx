import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, {useState} from 'react'

  const SetComponents = () => {

    const General = [
      {title: "Language", language: "English"},
      {title: "Profile", language: null},
      {title: "Contact Us", language: null},
    ];
    const Security = [
      {title: "Change Password", language: null},
      {title: "Privacy Policy", language: null},
    ];

    const [isEnabled, setIsEnabled] = useState(false);

  return (
    <View>
      <View>
        {/* Go back button */}
        <TouchableOpacity>
          onPress = {() => NavigationPreloadManager.goBack()}
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default SetComponents

const styles = StyleSheet.create({})