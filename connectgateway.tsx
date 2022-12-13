import React, { FC, useEffect, useState } from "react"
import { View, ViewStyle, TextStyle, ImageStyle, SafeAreaView,StyleSheet, Alert, TouchableOpacity, Dimensions  } from "react-native"
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
import { TextInput} from "react-native-gesture-handler"
//const bowserLogo = require("./bowser.png")
const windowsHeight = Dimensions.get('screen').height
const windowsWidth = Dimensions.get('screen').width
const FULL: ViewStyle = { flex: 1 ,backgroundColor: 'white'}
const styles = StyleSheet.create({
image: {
     width:125.18,
     height:150,
     justifyContent: 'center',
     alignItems:'center',
     marginHorizontal:'31%',
     marginVertical:5
  },
  text:{
    color: '#111111',
    fontSize: 18,
    padding: 20,
    marginTop: windowsHeight * 0.1,
    marginBottom: windowsHeight * 0.1,
    textAlign:'center',
    fontWeight:'bold'
  },
  text1:{
    width:'75%',
    height:37,
    
     color:'#757575',
    fontSize:12,
    textAlign: 'center',
        marginTop: '2%'
  },
  text2:{
    width:200,
     height:37,
     color:'#757575',
     fontSize:12,
     textAlign: 'center',
        marginTop: '-5%'
  },
  view:{
    flex:1,
    alignItems:'center',
    marginHorizontal:30
  },
  btn:{
    width:140,
    height:40,
    marginHorizontal:115,
    marginVertical:150,
    backgroundColor:'#77C146',
    borderRadius:6
  },
  btntxt:{
    width:120,
    height:20,
    marginHorizontal:400,
    marginVertical:100,
  }
  
})

export const ConnectgatewayScreen: FC<StackScreenProps<NavigatorParamList, "connectgateway">> = observer(
  ({ navigation }) => {let nextScreen = () => navigation.navigate("addgateway")
   
    
      
  

    return (
      <View testID="WelcomeScreen" style={FULL}>
        {/* <Text style={styles.image}>hai</Text> */}
       <Text style={styles.text}>Welcome to GlowFY</Text>
       <Image
       style={styles.image}
       source={require('../../../assets/images/gateway.png')}/>
        <View style={styles.view}> 
        <Text style={styles.text1}>To connect and start using the devices,</Text><Text style={styles.text2}> Please configure Gateway first!</Text>
        </View>
        <View >
      <Button activeOpacity={0.2} onPress={()=>nextScreen()} style={styles.btn}>
      <Text style={styles.btntxt}>Connect Gateway</Text>
      </Button>
      </View>
      </View>
      
    )
   
  },
)
