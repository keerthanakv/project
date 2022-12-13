import React, { FC, useEffect, useState } from "react"
import { View, ViewStyle, TextStyle, ImageStyle, SafeAreaView,StyleSheet, Alert, TouchableOpacity  } from "react-native"
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
  logintext:{
    width:186,
     height:31,
     marginHorizontal:16,
     marginVertical:9,
     color:'#111111',
     fontWeight:'bold',
     fontSize:22,
  },
  textinput1:{
    width:375,
     height:46,
     marginHorizontal:16,
     marginVertical:30,
    borderColor:'#E0E0E0',
    borderRadius:6,
    borderWidth:2
  },
  textinput2:{
    width:375,
     height:46,
     marginHorizontal:16,
     marginVertical:5,
    borderColor:'#E0E0E0',
    borderRadius:6,
    borderWidth:2
  },
   login:{
    width:375,
     height:46,
     marginHorizontal:16,
     marginVertical:12,
     backgroundColor:'#77C146',
     borderRadius:6
  },
  logtext:{
    width:150,
    height:17,
    marginHorizontal:250,
    marginVertical:13,
    alignItems:'center',
    justifyContent:'center'
  },
  forgetpass:{
    width:150,
    height:20,
    marginHorizontal:16,
    marginVertical:9,
    color:'#77C146',
    fontSize:12
  },
  signup:{
    width:192,
    height:17,
    marginHorizontal:120,
    marginVertical:9,
    color:'#77C146',
    fontSize:12,
    alignItems:'center',
    justifyContent:'center'
  },
  maintext:{
    color:'#666666',
     width:240,
    height:40,
    marginHorizontal:120,
    marginVertical:155,
    alignContent:'center',
    justifyContent:'center',
    textAlign:'center'
  },
  maintext1:{
    color:'#666666',
    lineHeight:20,
    alignContent:'center',
    textAlign:'center'
  },
  innertext:{
    color:'#77C146',
    fontWeight:'bold',
    width:260,
    height:40,
    marginHorizontal:95,
    marginVertical:110,
    textAlign:'center'
  },
  view:{
    flex:1,
    alignItems:'center',
    marginHorizontal:73,
    marginVertical:99,
  }
  
})

export const ForgotScreen: FC<StackScreenProps<NavigatorParamList, "forgot">> = observer(
  ({ navigation }) => {let nextScreen = () => navigation.navigate("demo")
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
       <Text style={styles.logintext}>Forgot Password</Text>
     
       <TextInput style={styles.textinput1} 
       placeholder="Email ID"
       keyboardType="email-address"
       onChangeText={(email)=>setEmail(email)}
      
       />
      
      <View >
      <Button activeOpacity={0.2} onPress={()=>login()} style={styles.login}>
      <Text style={styles.logtext}>Get Verification Code</Text>
      </Button>
      </View>
      <View >
      <TouchableOpacity activeOpacity={0.2} onPress={()=>navigation.navigate('login')}>
      <Text style={styles.signup}>Remember your Password? Log In</Text>
      </TouchableOpacity>
      </View>
     {/* <Text style={styles.maintext}>By Clicking, I Agree to the </Text><Text style={styles.innertext}>Privacy Policy<Text style={styles.maintext1}> and</Text> <Text style={styles.innertext}>User Agreement</Text></Text> */}
      <View style={styles.view}>
      <Text style={styles.maintext}>By Clicking, I Agree to the <Text style={styles.innertext}>  PrivacyPolicy</Text><Text style={styles.maintext1}> and</Text> <Text style={styles.innertext}>User Agreement</Text></Text>
      </View>
     
      </View>
      
    )
   
  },
)
