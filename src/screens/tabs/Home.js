import { StyleSheet, Text, View,TouchableOpacity,Image,ScrollView } from 'react-native'
import React, {useState,useEffect,Component} from 'react'

const Home = () => {
  const [showContent1, setShowContent1] = useState(false);
  const [showContent2, setShowContent2] = useState(false);
  const [showContent3, setShowContent3] = useState(false);
  return (
    <ScrollView>
    
    <View style={{flex: 10, backgroundColor: 'white'}} >  
<View style={{   justifyContent: 'center', alignItems: 'center' }}>
<Image
          source={require('../../images/cwickoline.png')}
          style={{width: 400, height: 140, marginBottom:20,}}
        /> 
</View>

    <View style={{ flexDirection: 'row', justifyContent: 'space-around',margin:20 }}>
   <TouchableOpacity
          > 
   <Image
          source={require('../../images/Qrcode.png')}
          style={{width: 70, height: 95, marginBottom:20}}
        /> 
    </TouchableOpacity>

    <TouchableOpacity
          > 
   <Image
          source={require('../../images/ScanDocs.png')}
          style={{width: 70, height: 95, marginBottom:20}}
        /> 
    </TouchableOpacity>

    <TouchableOpacity
          > 
   <Image
          source={require('../../images/ShareContact.png')}
          style={{width: 70, height: 95, marginBottom:20}}
        /> 
    </TouchableOpacity>


    <TouchableOpacity
          > 
   <Image
          source={require('../../images/SharePhoneNumber.png')}
          style={{width: 70, height: 95, marginBottom:20}}
        /> 
    </TouchableOpacity>
    </View>

    <TouchableOpacity
            onPress={() => setShowContent1(!showContent1)} style={homepage.accordion}><Text style={homepage.accordiontext}>+ Files</Text></TouchableOpacity>
          {showContent1 && (
            <Text>This is the content that will be shown on TouchableOpacity press.</Text>
          )}
          <TouchableOpacity
            onPress={() => setShowContent2(!showContent2)} style={homepage.accordion}><Text style={homepage.accordiontext}>Choose Print</Text></TouchableOpacity>
          {showContent2 && (
            <Text>This is the content that will be shown on TouchableOpacity press.</Text>
          )}
    
          <TouchableOpacity
            onPress={() => setShowContent3(!showContent3)} style={homepage.accordion}><Text style={homepage.accordiontext}>Billing</Text></TouchableOpacity>
          {showContent3 && (
            <Text>This is the content that will be shown on TouchableOpacity press.</Text>
          )}

          <View><Text style={{margin:20,fontWeight:'800'}}>People</Text></View>
          <View><Text style={{margin:20,fontWeight:'800'}}>Businesses</Text></View>
        
            </View>
            <TouchableOpacity><Text style={{margin:20}}>Transaction History  </Text></TouchableOpacity>
            <TouchableOpacity><Text style={{margin:20,marginBottom:100}}>Check Internet Speed  </Text></TouchableOpacity>
            </ScrollView>
  );
};

export default Home;

const homepage = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    alignItems: 'center',
    flexDirection: 'column'
  },
  links:{
    margin:6,
    fontSize:16,
    fontWeight: 'bold',  padding:1, textDecorationLine:'underline'
  },
  text: {
    color: '#000',
    fontSize: 14,
    fontWeight: 'bold',
  },
  accordion: {
    backgroundColor:'pink',width:'50%',margin:'5%' 
  },
  accordiontext: {
    color:'black',fontSize:20,padding:'5%'},
  tinyLogo: {
    width:100,height:100,margin:10
  }
});