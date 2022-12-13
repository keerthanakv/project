import React, { FC, useEffect, useState } from "react"
import { View, ViewStyle, TextStyle, ImageStyle, SafeAreaView, StyleSheet, Image, TouchableOpacity, StatusBar, FlatList } from "react-native"
import { StackScreenProps } from "@react-navigation/stack"
import { observer } from "mobx-react-lite"

import {
  Button,
  Header,
  Screen,
  Text,
  GradientBackground,
  //AutoImage as Image,
} from "../../components"
import { color, spacing, typography } from "../../theme"
import { NavigatorParamList } from "../../navigators"
import { TextInput } from "react-native-gesture-handler"
import LottieView from 'lottie-react-native';
import Feather from 'react-native-vector-icons/dist/Feather';
import Entypo from 'react-native-vector-icons/dist/Entypo';
import Icon from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';


const FULL: ViewStyle = { flex: 1, backgroundColor: 'white' }
const styles = StyleSheet.create({
image:{
    width:139.97,
    height:140,
    marginHorizontal:'30%',
    marginVertical:120
},
 text1:{
  color:'#111111',
  fontWeight:'bold',
  fontSize:20,
  width:'100%',
  height:'10%',
 marginHorizontal:'15%',
  marginVertical:'-25%'
 },
 text2:{
  color:'#757575',
  fontSize:12,
  width:282,
  marginHorizontal:'20%',
  marginVertical:'20%',
 
  height:57,
  
 },
 text3:{
  color:'#757575',
  fontSize:12,
  width:282,
  marginHorizontal:'18%',
  marginVertical:'-30%',
  height:57,
  
 },
 text4:{
  color:'#757575',
  fontSize:12,
  width:282,
  marginHorizontal:'37%',
  marginVertical:'20%',
  height:57,
 },
 text5:{
  color:'#757575',
  fontSize:12,
  width:300,
  marginHorizontal:'25%',
  marginVertical:'-20%'
 },
 text6:{
  color:'#757575',
  fontSize:12,
  width:300,
  marginHorizontal:'40%',
  marginVertical:'20%'
 },
 btn: {
  width: '90%',
  height: 36,
  marginHorizontal: '5%',
  marginVertical: '25%',
  backgroundColor: '#77C146',
  borderRadius: 6
},
btntxt: {
  width: '45%',
  height: 20,
  marginHorizontal: 70,
  marginVertical: 100,
},
})

export const ConfigurecScreen: FC<StackScreenProps<NavigatorParamList, "configurec">> = observer(
  ({ navigation, route }) => {
    let nextScreen = () => navigation.replace("selectgateway")
  
    



    return (
      <View testID="ConfigurecScreen" style={FULL}>
        <StatusBar
          animated={true}
          backgroundColor="#FFFFFF"
        />
       <Image
       style={styles.image}
       source={require('../../../assets/images/success.png')}/>
       <Text style={styles.text1} >Gateway Configure Successful</Text>
       <View>
       <Text style={styles.text2}>You have successfully Configured a Gateway.</Text>
       <Text style={styles.text3}> Please go to your Home screen to add devices </Text>
       <Text style={styles.text4}>and control them.</Text>
        <Text style={styles.text5}>You can always reconfigure Gateway </Text>                              
        <Text style={styles.text6}>in the settings.</Text>
        </View>
        <Button activeOpacity={0.2}onPress={() =>navigation.navigate('homescreen')} style={styles.btn}>
          <Text style={styles.btntxt}>Go to Home Screen</Text>
        </Button>

        
      </View>

    )

  },
)
