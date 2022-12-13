import React, { FC, useEffect, useState } from "react"
import { View, ViewStyle, TextStyle, ImageStyle, SafeAreaView,StyleSheet } from "react-native"
import { StackScreenProps } from "@react-navigation/stack"
import { observer } from "mobx-react-lite"

import {
  Button,
  Header,
  Screen,
  Text,
  GradientBackground,
  AutoImage as Image,
} from "../../components"
import { color, spacing, typography } from "../../theme"
import { NavigatorParamList } from "../../navigators"
const bowserLogo = require("./bowser.png")

const FULL: ViewStyle = { flex: 1,
  backgroundColor: '#FFFFFF', }
const styles = StyleSheet.create({
image: {
     width:'70%',
     height:'15%',
     justifyContent: 'center',
     alignItems:'center',
     marginHorizontal:'15%',
     marginVertical:'65%'
  },})

export const WelcomeScreen: FC<StackScreenProps<NavigatorParamList, "welcome">> = observer(
  ({ navigation }) => {
    const nextScreen = () => navigation.navigate("login")
    const [redirect,setRedirect]=useState(false);
    useEffect(() => {
    setTimeout(()=>{
      nextScreen()
    },3000)
    console.log('After 9 sec')
    
   
     
    
  }, []);

    return (
      <View testID="WelcomeScreen" style={FULL}>
        <Screen style={{backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center'}}>
       <Image
       
       source={require('../../../assets/images/glowfy_logo.png')}
       resizeMode='center'/>
        </Screen>
      </View>
    )
   
  },
)
