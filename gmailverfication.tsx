import React, { FC, useEffect, useState } from "react"
import { View, ViewStyle, TextStyle, ImageStyle, SafeAreaView,StyleSheet, Alert, TouchableOpacity} from "react-native"
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
const bowserLogo = require("./bowser.png")

const FULL: ViewStyle = { flex: 1 }
const styles = StyleSheet.create({
image: {
     width:110.24,
     height:40,
     justifyContent: 'center',
     alignItems:'center',
     marginHorizontal:130,
     marginVertical:30
  },
  signintext:{
    width:256,
     height:31,
     marginHorizontal:16,
     marginVertical:9,
     color:'#111111',
     fontWeight:'bold',
     fontSize:22,
  },
  text:{
    color:'#666666',
    width:270,
    height:38,
    marginHorizontal:80,
    marginVertical:-10,
    fontSize:13,
    alignItems:'center',
  },
  view:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    marginVertical:10
    //marginVertical:-25
  }
  
})

export const EmailvScreen: FC<StackScreenProps<NavigatorParamList, "emailv">> = observer(
  ({ navigation }) => {
    const nextScreen = () => navigation.navigate("demo")
    const [passwordVisible, setPasswordVisible] = useState(true);
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const login=()=>{
      const regex=new RegExp("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$");
      if(!regex.test(email)){
        Alert.alert('invalid email id')
        return false;
      }else if (password.length<8){
        Alert.alert('must be 8 character')
        return false;
      }
      nextScreen();
    }
    
    
      
  

    return (
      <View testID="WelcomeScreen" style={FULL}>
        {/* <Text style={styles.image}>hai</Text> */}
        <Image
       style={styles.image}
       source={require('../../../assets/images/glowfy_logo.png')}/>
       <Text style={styles.signintext}>
       Enter Verfication Code
       </Text>
       
       <Text style={styles.text}>Please, enter the Verification code we sent  to your email jo***@email.com</Text>
      
       
       
      </View>
      
    )
   
  },
)
