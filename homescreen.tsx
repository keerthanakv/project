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
import ActionSheet, { SheetManager } from "react-native-actions-sheet"
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';


const FULL: ViewStyle = { flex: 1, backgroundColor: 'white' }
const styles = StyleSheet.create({
text:{
  width: '49%',
    height: 23,
    marginHorizontal: '30%',
    marginVertical: -49,
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 16,
},
text1:{
  width:95,
    height: 23,
    marginHorizontal: '35%',
    marginVertical:'20%',
    color: '#111111',
    fontWeight: 'bold',
    fontSize: 18,
},
image:{
  width:205.09,
  height:170,
  marginHorizontal:'21%'
},
text2:{
  color:'#757575',
  width:'90%',
  height: 30,
  marginHorizontal: '15%',
  marginVertical:'9%',
  fontSize: 14,
},
btn: {
  width: '25%',
  height: 36,
  marginHorizontal: '36%',
  marginVertical: '5%',
  backgroundColor: '#77C146',
  borderRadius: 6
},
btntxt: {
  width: 80,
  height: 20,
},
imageu:{
  width:35,
  height:35,
  marginHorizontal:10,
  marginVertical:10
},
imagea:{
  width:24,
  height:24,
  marginHorizontal:'20%',
  marginVertical:'10%'
},
touchableopacity:{
  backgroundColor:'#77C146',
  borderRadius:6,
  width:40,
  height:30,
  marginHorizontal:'85%',
  marginVertical:-40
},
container: {
  height: 300,

},
actext:{
  color: '#212121',
   fontSize: 20, 
  width: '70%',
  marginHorizontal:'20%',
  marginVertical:'-10%',
  fontWeight:'bold',
},
sheetHoriView: {
  flexDirection: 'row',
  alignItems: 'center',
  // width: windowsWidth,
},
})

export const HomeScreen: FC<StackScreenProps<NavigatorParamList, "homescreen">> = observer(
    ({ navigation }) => {
      let nextScreen = () => navigation.navigate("adddevice" )
      const manageProfileScreen = () => navigation.navigate("manageprofilescreen")
      const manageGatewayScreen = () => navigation.navigate("managegatewayscreen")
      const manageUserScreen = () => navigation.navigate('manageuserscreen')
      const manageDeviceScreen=()=>navigation.navigate('managedevicescreen')
      const manageRoomsScreen = () => navigation.navigate('manageroomscreen')
      let actionSheetRef = useRef(null);
      const showActionSheet = () => {
        actionSheetRef.current?.show();
      }
      const logOut = async () => {
    
      
        navigation.navigate('login')
    }
      return (
        <View testID="HomeScreen" style={FULL}>
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
        />
        
         <Text style={styles.text}>Good Morning!<Text> John Doe</Text></Text>
         <TouchableOpacity onPress={() =>SheetManager.show("mysheet")}>
         <ActionSheet
              id="mysheet"
              initialOffsetFromBottom={1}
              gestureEnabled={true}
              extraScroll={10}
              containerStyle={styles.container}
              headerAlwaysVisible={true}>
               <Image
      style={styles.imageu}
       source={require('../../../assets/images/user_grey.png')}/>
       <Text style={styles.actext}>John Doe</Text>
       <TouchableOpacity style={{ width: '10%', marginHorizontal:'90%', marginVertical:'4%' }}
                                    onPress={() => SheetManager.hideAll()}>
                                    <MaterialIcons name='close' color={'#5F6368'} size={24} />
                                </TouchableOpacity>
      <TouchableOpacity style={{ ...styles.sheetHoriView, marginTop: 10 }}
                                onPress={() => {
                                    SheetManager.hideAll()
                                    manageProfileScreen()
                                }}>
                                  <View style={{ marginStart: 8, marginEnd: 24,marginVertical:'-10%' }}>
                                  <Image
                                  style={{width:24,
                                    height:24,
                                    marginHorizontal:10,
                                    marginVertical:10}}
                                  source={require('../../../assets/images/manage_profile.png')}/>
                                </View>
                                <Text
                                    style={{ color: '#212121', fontSize: 14, }}
                                    text={'Manage Profile'}
                                />
        </TouchableOpacity>            
        <TouchableOpacity style={{ ...styles.sheetHoriView, marginTop: 10 }}
                                onPress={() => {
                                    SheetManager.hideAll()
                                    manageUserScreen()
                                }}>
                                <View style={{ marginStart: 8, marginEnd: 26 }}>
                                <Image
                                   style={{width:24,
                                    height:24,
                                    marginHorizontal:10,
                                    marginVertical:10}}
                                  source={require('../../../assets/images/manage_users.png')}/>
                                </View>

                                <Text
                                    style={{ color:'#212121', fontSize: 14, }}
                                    text={'Manage Users'}
                                />
        </TouchableOpacity>  
        <TouchableOpacity style={{ ...styles.sheetHoriView, marginTop: -10}}
                                onPress={() => {
                                    SheetManager.hideAll()
                                    manageGatewayScreen()
                                  
                                }}>
                                <View style={{ marginStart: 8, marginEnd: 26 }}>
                                <Image
                                  style={{width:24,
                                    height:24,
                                    marginHorizontal:10,
                                    marginVertical:10}}
                                  source={require('../../../assets/images/manage_gateway.png')}/>
                                </View>

                                <Text
                                    style={{ color: '#212121', fontSize: 14,  }}
                                    text={'Manage Gateway'}
                                />
        </TouchableOpacity>
        <TouchableOpacity style={{ ...styles.sheetHoriView, marginTop: -10 }}
                                onPress={() => {
                                    SheetManager.hideAll()
                                    manageDeviceScreen()
                                }}>
                                <View style={{ marginStart: 8, marginEnd: 26 }}>
                                <Image
                                   style={{width:24,
                                    height:24,
                                    marginHorizontal:10,
                                    marginVertical:10}}
                                  source={require('../../../assets/images/manage_devices.png')}/>
                                </View>

                                <Text
                                    style={{ color: '#212121', fontSize: 14,  }}
                                    text={'Manage Devices'}
                                />
        </TouchableOpacity>
        <TouchableOpacity style={{ ...styles.sheetHoriView, marginTop: -10 }}
                                onPress={() => {
                                    SheetManager.hideAll()
                                    manageRoomsScreen()
                                }}>
                                <View style={{ marginStart: 8, marginEnd: 26 }}>
                                <Image
                                  style={{width:24,
                                    height:24,
                                    marginHorizontal:10,
                                    marginVertical:10}}
                                  source={require('../../../assets/images/manage_rooms.png')}/>
                                </View>

                                <Text
                                    style={{ color: '#212121', fontSize: 14,  }}
                                    text={'Manage Rooms'}
                                />
        </TouchableOpacity>
        <TouchableOpacity style={{ ...styles.sheetHoriView, marginTop: -10 }}
                                onPress={() => {
                                    SheetManager.hideAll()
                                    logOut()
                                }}>
                                <View style={{ marginStart: 8, marginEnd: 26 }}>
                                <Image
                                   style={{width:24,
                                    height:24,
                                    marginHorizontal:10,
                                    marginVertical:10}}
                                  source={require('../../../assets/images/logout.png')}/>
                                </View>

                                <Text
                                    style={{ color: '#212121', fontSize: 14, }}
                                    text={'Log Out'}
                                />
                            </TouchableOpacity>
        </ActionSheet>
         <Image
      style={styles.imageu}
       source={require('../../../assets/images/user.png')}/></TouchableOpacity>
       <TouchableOpacity activeOpacity={0.1} style={styles.touchableopacity} onPress={() => navigation.navigate('adddevice')}>
        <Image
      style={styles.imagea}
       source={require('../../../assets/images/add.png')}/></TouchableOpacity>
         <Text style={styles.text1}>Add Device</Text>
         <Image
       style={styles.image}
       source={require('../../../assets/images/nodevice.png')}/>
       <Text style={styles.text2}>To control the device, add Device and setup!</Text>
       <Button activeOpacity={0.2}onPress={() =>nextScreen()} style={styles.btn}>
          <Text style={styles.btntxt}>Add Device</Text>
        </Button>

        </View>
      )
    },
  )
  