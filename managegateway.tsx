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
    marginVertical: '110%',
    backgroundColor: '#77C146',
    borderRadius: 6
  },
  btntxt: {
    width: '25%',
    height: 20,
    marginHorizontal: 70,
    marginVertical: 100,
    alignSelf: 'center',
        textAlign: 'center',
  },

  textinput1: {
    width: '90%',
    height: 46,
    marginHorizontal: 16,
    marginVertical: '5%',
    borderColor: '#E0E0E0',
    borderRadius: 6,
    borderWidth: 2
  },
  textinput2: {
    width: '90%',
    height: 46,
    marginHorizontal: 16,
    marginVertical: 5,
    borderColor: '#E0E0E0',
    borderRadius: 6,
    borderWidth: 2
  },
  view2: {
    marginVertical: 70
  },
  ebtn: {
   
  
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 50,
    height: 50,
    marginHorizontal: '85%',
    marginVertical: '-10%',
    padding: '-15%',
  },

  ebtn1: {
    width: 50,
    height: 50,
    marginHorizontal: '85%',
    marginVertical: '-15%',
    padding: '-15%',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  view3: {
    marginVertical: -90
  }
})

export const ManageGatewayScreen: FC<StackScreenProps<NavigatorParamList, "managegatewayscreen">> = observer(
  ({ navigation, route }) => {
    let nextScreen = () => navigation.navigate("configurec")
    const goBack = () => navigation.goBack()
    const [passwordVisible, setPasswordVisible] = useState(true);
    const [password,setPassword]=useState(null);
    const [wifi,setWifi]=useState(null);
    const [disabled,setDisabled]=useState(false);
    
    // console.log('wifi connct ===>>', route.params);

    // const enable=()=>{
    //   setDisabled(previousState => !previousState); 
    // }

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
        <Text style={styles.text}>Manage Gateway</Text>
        <View style={styles.view1}>
          <Text style={styles.main}>Choose Wi-Fi and enter Password </Text>
        </View>
        <View style={styles.view3} >

          <TextInput style={styles.textinput1}
          
            placeholder="Wi-Fi"
          onChangeText={(wifi)=>setWifi(wifi)}
          editable={true}
          value={route.params}

          />

          <TouchableOpacity style={styles.ebtn1} onPress={() => navigation.navigate('selectwifi')}>
            <FontAwesome name={"exchange"} size={20} color={'black'} />
          </TouchableOpacity>


          <View style={styles.view2}>
            <TextInput style={styles.textinput2}
          
              placeholder="Wi-Fi Password"
              secureTextEntry={passwordVisible}
             onChangeText={(password)=>setPassword(password)}
            //  onEndEditing={()=>enable()}
           
            />
            <TouchableOpacity style={styles.ebtn}>
              <Icon name={passwordVisible ? "eye" : "eye-off"} onPress={() => setPasswordVisible(!passwordVisible)} size={20} color={'black'} />
            </TouchableOpacity>
            {/* <Image 
        source={require('../../../assets/images/bi.png')}/> */}
            {/* <Entypo name={'eye'} size={30} color={'black'}/>
         <Feather name={'eye'} size={30} color={'black'}/> */}
          </View>

        </View>

        <Button activeOpacity={0.2}onPress={() =>navigation.navigate('dashboardscreen')} style={styles.btn}>
          <Text style={styles.btntxt}>Update</Text>
        </Button>

      </View>

    )

  },
)
