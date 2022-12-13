import React, { FC, useEffect, useRef, useState } from "react"
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
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';


const FULL: ViewStyle = { flex: 1, backgroundColor: 'white' }
const styles = StyleSheet.create({

  text: {
    width: '50%',
    height: 23,
    marginHorizontal: '15%',
    marginVertical: '-15%',
    color: '#FFFFFF',
   
    fontSize: 16,
  },
  view: {
    width: 411,
    height: 93,
    marginVertical: 160,



  },

  main: {
    width: 300,
    height: 40,
    marginHorizontal: 100,
    marginVertical: 114,
    color: '#757575',
    fontSize: 14
  },
  view1: {
    marginVertical: -15,
    marginHorizontal: -10
  },

  btn: {
    width: '90%',
    height: 36,
    marginHorizontal: '5%',
    marginVertical: '32%',
    backgroundColor: '#77C146',
    borderRadius: 6
  },
  btntxt: {
    width: '25%',
    height: 20,
    marginHorizontal: '15%',
    marginVertical: 10,
    alignSelf: 'center',
    textAlign: 'center',


  },

  textinput1: {
    width: '90%',
    height: 46,
    marginHorizontal: 16,
    marginVertical: '35%',
    borderColor: '#E0E0E0',
    borderRadius: 6,
    borderWidth: 2
  },
  textinput2: {
    width: '70%',
    height: 46,
    marginHorizontal: 16,
    marginVertical: '-30%',
    borderColor: '#E0E0E0',
    borderRadius: 6,
    borderWidth: 2
  },
  view2: {
    marginVertical: 70
  },
  ebtn: {
    width: 50,
    height: 50,
    marginHorizontal: 350,
    marginVertical: -50,
    padding: 5,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },

  ebtn1: {
    width: 50,
    height: 50,
    marginHorizontal: 350,
    marginVertical: -60,
    padding: 5,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  view3: {
    marginVertical: -90
  },
  editIconStyle: {
    width: '10%',
    alignItems: 'center',
    borderRadius: 6,
    marginHorizontal:'85%',
    marginVertical:'6%'
},


})

export const ManageProfileScreen: FC<StackScreenProps<NavigatorParamList, "manageprofilescreen">> = observer(
  ({ navigation, route }) => {
    let nextScreen = () => navigation.navigate("configurec")
    const goBack = () => navigation.goBack()
    const [passwordVisible, setPasswordVisible] = useState(true);
    const [password,setPassword]=useState('sssss');
    const [Edit, setEdit] = useState(false)
    const [disabled,setDisabled]=useState(false);
    const [isedit,setIsedit]=useState(false);
    const [fullname,setFullname]=useState('John Doe');
    const [email,setEmail]=useState('john@email.com');
    const [phonenumber,setPhonenumber]=useState('8909 789 089');
   
    return (
      <View testID="SelectgatewayScreen" style={FULL}>
        <StatusBar
          animated={true}
          backgroundColor="#0A56A2"
        />
        {/* <Text style={styles.image}>hai</Text> */}
        <Header
          style={{
            backgroundColor: '#0A56A2',
            justifyContent: 'space-around',
            height:'12%',
            borderBottomStartRadius: 20,
            borderBottomEndRadius: 20

          }}
          leftIcon="back"
          onLeftPress={goBack}
        />
        <Text style={styles.text}>Manage Profile</Text>
    
                        {
                          !isedit &&
                 
                            <TouchableOpacity
                                style={styles.editIconStyle}
                                onPress={() => { setIsedit(true) }}>
                                <MaterialIcons name={"edit"} size={24} color={'#FFFFFF'} />
                                
                            </TouchableOpacity>
                                  }
        
        
          
  <View style={{marginTop:'-8%'}}>      
    <TextInput style={styles.textinput1} 
       placeholder="Full Name"
       onChangeText={(fullname) => setFullname(fullname)}
       value={fullname}
       />
        <TextInput style={{ width: '90%',height: 46,marginHorizontal: 16,marginVertical: '-30%',borderColor: '#E0E0E0',borderRadius: 6,
    borderWidth: 2}} 
       placeholder="Email ID"
       keyboardType="email-address"
       onChangeText={(email) => setEmail(email)}
       value={email}
       />
       <TextInput style={{ width: '90%',
    height: 46,
    marginHorizontal: 16,
    marginVertical: '35%',
    borderColor: '#E0E0E0',
    borderRadius: 6,
    borderWidth: 2}}
        placeholder="Phone Number"
        onChangeText={(phonenumber) => setPhonenumber(phonenumber)}
        value={phonenumber}
        />
       <TextInput style={styles.textinput2}
        placeholder="Password"
        secureTextEntry={passwordVisible}
        onChangeText={(password)=>setPassword(password)}
        value={password}/>

      </View>
      <View>
      <TouchableOpacity onPress={ () => navigation.navigate("changepasswordscreen")}>
        <Text style={{color:'#77C146' ,width:'15%', marginVertical:'23%', 
        marginHorizontal:'80%'}}>Change</Text>
        </TouchableOpacity>
        </View>
                                {
                                    isedit &&
                                    
                                    <Button activeOpacity={0.2}onPress={() => {
                                      setIsedit(false)
                                      
                                  }} style={styles.btn}>
                                    <Text style={styles.btntxt}>Update</Text>
                                  </Button>
                                        
                                  
                                }
      </View>

    )

  },
)


