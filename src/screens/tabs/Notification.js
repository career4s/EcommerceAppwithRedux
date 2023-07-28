import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const Notification = () => {
  return (
    <View>
       <View style={{   justifyContent: 'center', alignItems: 'center' }}>
<Image
          source={require('../../images/cwickoline.png')}
          style={{width: 400, height: 140, marginBottom:20,}}
        /> 
</View>
      <Text>LET'S CHAT</Text>
    </View>
  )
}

export default Notification

const styles = StyleSheet.create({})