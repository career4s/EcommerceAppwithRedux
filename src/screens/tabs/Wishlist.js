import { StyleSheet, Text,Image, View } from 'react-native'
import React from 'react'

const Wishlist = () => {
  return (
    <View>
       <View style={{   justifyContent: 'center', alignItems: 'center' }}>
<Image
          source={require('../../images/cwickoline.png')}
          style={{width: 400, height: 140, marginBottom:20,}}
        /> 
</View>
      <Text>FILE STORAGE</Text>
      <Text>Let's</Text>
    </View>
  )
}

export default Wishlist

const styles = StyleSheet.create({})