import React, { FC, useEffect, useState } from "react"
import { View, ViewStyle, TextStyle, ImageStyle, SafeAreaView,StyleSheet, Alert, TouchableOpacity, KeyboardAvoidingView, Platform, Dimensions  } from "react-native"
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
import AsyncStorage from '@react-native-async-storage/async-storage';
import { async } from "validate.js"
const bowserLogo = require("./bowser.png")
const windowsHeight = Dimensions.get('screen').height
const windowsWidth = Dimensions.get('screen').width
const FULL: ViewStyle = { flex: 1 ,backgroundColor: 'white'}
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
    width:100,
    height:31,
    marginHorizontal:16,
    marginVertical:9,
    color:'#111111',
    fontWeight:'bold',
    fontSize:22,
 },
  textinput1:{
    backgroundColor: color.transparent,
    //backgroundColor: 'red',
    color: '#2A2A2A',
    fontSize: 16,
    height: 50,
    width: windowsWidth * 0.90,
    marginStart: 16,
    borderColor:'#E0E0E0',
    borderRadius:6,
    borderWidth:2
  },
  textinput2:{
    backgroundColor: color.transparent,
    //backgroundColor: 'red',
    color: '#2A2A2A',
    fontSize: 16,
    height: 50,
    width: windowsWidth * 0.90,
    marginStart: 16,
    borderColor:'#E0E0E0',
    marginVertical:'5%',
    borderRadius:6,
    borderWidth:2
  },
  login:{
    alignSelf: 'center',
    width: windowsWidth * 0.9,        
    marginTop: windowsHeight * 0.04,
    borderRadius: 6,
    backgroundColor:'#77C146',
    height:'22%'
    
  },
  logtext:{
    color: '#FFFFFF',
    width: windowsWidth * 0.9,
    alignSelf: 'center',
    textAlign: 'center',
    padding: 1,
    fontSize: 12
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
    marginVertical:3,
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
    marginVertical:'-15%'
  },
  container: {
    flex: 1,
    alignItems:'center',
   justifyContent: 'center',
    backgroundColor: 'white'
},
  
})

export const LoginScreen: FC<StackScreenProps<NavigatorParamList, "login">> = observer(
  ({ navigation }) => {let nextScreen = () => navigation.navigate("connectgateway")
    const [passwordVisible, setPasswordVisible] = useState(true);
    const [email,setEmail]=useState('kk@gmail.com');
    const [password,setPassword]=useState('789456123');
    const login= async ()=>{
      const regex=new RegExp("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$");
      if(!regex.test(email)){
        Alert.alert('invalid email id')
        return false;
      }
     else if (password.length<8){
        Alert.alert('must be 8 character')
        return false;
      }try{
        await AsyncStorage.setItem('Email',email);
        await AsyncStorage.setItem('Password',password);
        navigation.navigate('connectgateway')
      }catch(error){
        console.log(error);
      }
      
     
    }
    
    
      
  

    return (
      <View testID="WelcomeScreen" style={FULL}>
        {/* <KeyboardAvoidingView
           behavior={Platform.OS==='android' ? 'padding': 'height' }
           style={styles.container}> */}
        <Image
       style={styles.image}
       source={require('../../../assets/images/glowfy_logo.png')}
       resizeMode='center'/>
       <Text style={styles.logintext}>Log in</Text>
       
       <TextInput style={styles.textinput1} 
       placeholder="Email ID"
       keyboardType="email-address"
       onChangeText={(email)=>setEmail(email)}
  
      
       />
       <TextInput style={styles.textinput2}
        placeholder="Password"
        secureTextEntry={passwordVisible}
        onChangeText={(password)=>setPassword(password)}/>
      <View>
      <TouchableOpacity activeOpacity={0.2} onPress={()=>navigation.navigate('location')}>
      <Text style={styles.forgetpass}>Forgot Password</Text>
      </TouchableOpacity>
      </View>
      <View >
      <Button activeOpacity={0.2} onPress={()=>login()} style={styles.login}>
      <Text style={styles.logtext}>Log In</Text>
      </Button>
      </View>
      <View>
      <TouchableOpacity activeOpacity={0.2} onPress={()=>navigation.navigate('homepage')} style={{
        
         width: windowsWidth * 0.9,
         alignSelf: 'center',
        //  textAlign: 'center',
         alignItems: 'center',
         padding: 8,
         marginTop: '-25%',}}>
      <Text style={styles.signup}>Don't have an Account? Sign Up</Text>
      </TouchableOpacity>
      </View>
     {/* <Text style={styles.maintext}>By Clicking, I Agree to the </Text><Text style={styles.innertext}>Privacy Policy<Text style={styles.maintext1}> and</Text> <Text style={styles.innertext}>User Agreement</Text></Text> */}
      <View style={styles.view}>
      <Text style={styles.maintext}>By Clicking, I Agree to the <Text style={styles.innertext}>  PrivacyPolicy</Text><Text style={styles.maintext1}> and</Text> <Text style={styles.innertext}>User Agreement</Text></Text>
      </View>
      {/* </KeyboardAvoidingView> */}
     
      </View>
      
    )
   
  },
)
