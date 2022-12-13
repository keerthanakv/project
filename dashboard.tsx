import React, { FC, useEffect, useRef, useState } from "react"
import { View, ViewStyle, TextStyle, ImageStyle, SafeAreaView, StyleSheet, Image, TouchableOpacity, StatusBar, FlatList, Switch } from "react-native"
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
import  MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import ActionSheet, { SheetManager } from "react-native-actions-sheet";

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
  width:'30%',
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
  marginHorizontal:'25%'
},
text2:{
  color:'#757575',
  width:280,
  height: 24,
  marginHorizontal: '17%',
  marginVertical:'9%',
  fontSize: 14,
},
btn: {
  width: '25%',
  height: 36,
  marginHorizontal: '37%',
  marginVertical: '5%',
  backgroundColor: '#77C146',
  borderRadius: 6
},
btntxt: {
  width: 80,
  height: 20,
},
imageu:{
  width:36,
  height:36,
  marginHorizontal:10,
  marginVertical:10
},
images:{
  width:17,
  height:16,
  marginHorizontal:3,
  marginVertical:11
},
images1:{
  width:17,
  height:16,
  marginHorizontal:10,
  marginVertical:11,

},
imagess:{
  width:17,
  height:16,
  marginHorizontal:3,
  marginVertical:11
},
images11:{
  width:17,
  height:16,
  marginHorizontal:7,
  marginVertical:11,

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
switch: {
 
  position: 'absolute', 
  end: 16, 
  top: '15%'
   
  },
  textt: {
    color: '#111111',
    width: 100,
    height: 17,
    fontSize: 12,
    marginHorizontal: '5%',
    marginVertical: '-5%'
  },
   switch2: {
    width: 48,
    height: 24,
    marginHorizontal: '65%',
    marginVertical: '-18%'
  },
  imager:{
    width:16,
    height:16,
    marginHorizontal:'25%',
    marginVertical:'13%'
  },
  text3:{
    width:'30%',
      height: 23,
      marginHorizontal: '30%',
      marginVertical:'-19%',
      color: '#111111',
      fontSize: 12,
  },
  imager1:{
    width:16,
    height:16,
    marginHorizontal:'49%',
    marginVertical:'14%'
  },
  text4:{
    width:'30%',
      height: 23,
      marginHorizontal: '55%',
      marginVertical:'-19%',
      color: '#111111',
      fontSize: 12,
  },
  t1: {
    width: '37%',
    borderRadius: 15,
    backgroundColor: '#FFFFFF',
    borderColor: '#E2E2E2',
    marginEnd: 1,
    marginBottom: 16,
    borderWidth: 2,
    padding: -15,
    height: '55%',
    marginHorizontal: '10%',
    marginVertical:'30%'
  },
  fl: {
    color: '#111111',
    width: '80%',
    height: 60,
    marginHorizontal: '5%',
    marginVertical: '-5%'
  },
  t2: {
    width: 24,
    height: 24,
    marginHorizontal: '80%',
    marginVertical: '1%'
  },
  switchtype: {
    width: 16,
    height: 16,
    marginHorizontal: '10%'
  },
  flatlist:{
    height:'100%',
    width:'100%',
    // marginVertical:'-5%'
    top:'-20%'
  },
  
  view:{
    marginTop:-40,
    flexDirection:'row',
    alignItems:'center',
   
  },
  switchtext:{
    fontSize: 12,
    color:'#111111',
    marginEnd: 20,
     marginStart: 6, 
     marginTop: 2
  },
//   offSwitchViewStyle: {
//     borderRadius: 5,
//     backgroundColor: '#DFDFDF',
//     width:'25%',
// },
offSwitchViewStyle1: {
 
  borderRadius: 5,
  backgroundColor: '#DFDFDF',
  width:'35%',

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

export const DashboardScreen: FC<StackScreenProps<NavigatorParamList, "dashboardscreen">> = observer(
    ({ navigation }) => {
      let nextScreen = () => navigation.navigate("switchcontrol" )
      const manageProfileScreen = () => navigation.navigate("manageprofilescreen")
      const manageGatewayScreen = () => navigation.navigate("managegatewayscreen")
      const manageUserScreen = () => navigation.navigate('manageuserscreen')
      const manageDeviceScreen=()=>navigation.navigate('managedevicescreen')
      const manageRoomsScreen = () => navigation.navigate('manageroomscreen')
      let actionSheetRef = useRef(null);
      const [selectitems, setSelectitems] = useState([])
      const [selectedItems, setSelectedItem] = useState([])
      const [isSwitchcontrol, SetIsSwitchcontrol] = useState(false)
      const [roomList, setRoomList] = useState([
        {
            id: 1,
            roomName: "Living Room",
            status: false,
            switchCount:3,

        },
        {
          id: 2,
          roomName: "Kitchen",
          status: false,
          switchCount:2,

      }    
       
    ])
    const logOut = async () => {
    
      
      navigation.navigate('login')
  }
    
    const switching = (index, value) => {
      const tempArray = [...roomList]
      tempArray[index].status = value
      setRoomList(tempArray)
  }

    const getSelected = (item) => selectitems.includes(item.id)
    const renderItem = ({ item, index }) => {     
 
       return (
 
         <TouchableOpacity
           activeOpacity={0.3}
           style={{ ...styles.t1, borderColor: getSelected(item) ? '#77C146' : '#E2E2E2' }}>
            <View style={{ top:11, marginHorizontal:10}}>
            <View style={{
                            ...styles.offSwitchViewStyle1,
                            backgroundColor: item.status ?
                            '#77C146' :'#DFDFDF'
                        }}>
                            {item.status ?  
                            <Image
                        style={styles.images1} 
                        source={require('../../../assets/images/on_room_large.png')}/> : 
                        <Image
                        style={styles.images1} 
                        source={require('../../../assets/images/off_room_small.png')}/>}
                        </View>
                        </View>
           <TouchableOpacity activeOpacity={0.3} onPress={() => {
           
             nextScreen() 
                 
           }} style={styles.t2}>
             <MaterialIcons name={"arrow-forward-ios"} size={16} color={'#0A56A2'} />
           </TouchableOpacity>
           <Text style={styles.fl}>{item.roomName}</Text>
           <View style={styles.view}>
           
                        {item.status ?  
                        <Image
                        style={styles.images11} 
                        source={require('../../../assets/images/on_switch_small.png')}/> :   
                        <Image
                        style={styles.imagess}
                        source={require('../../../assets/images/off_switch_large.png')}/>}
                        
                        <Text style={styles.switchtext}
                            text={item.switchCount + " Switches"} />
                    </View>
           <View>        
           <Text style={styles.textt}>{item.status ? 'On' : 'Off'}</Text>
           <Switch
              style={styles.switch2}
              trackColor={{ false: "#DEDFE1", true: "#77C146" }}
              thumbColor={ "#FFFFFF"}
              ios_backgroundColor={"#DEDFE1"}
              onValueChange={(value) => switching(index, value)}
              value={item.status}
            />
           </View>
          
         
         </TouchableOpacity>
         );
        };
    
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
                                    manageProfileScreen ()
                                }}>
                                  <View style={{ marginStart: 8, marginEnd: 24,marginVertical:'-10%' }}>
                                  <Image
                                  style={{ width:24,
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
                                  style={{ width:24,
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
                                  style={{ width:24,
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
                                 style={{ width:24,
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
                                  style={{ width:24,
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
                                 style={{ width:24,
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
       <View>
         <Text style={styles.text1}>Your Rooms</Text>
         </View> 
         <View style={{ position: 'absolute', end: 5,top:100 }}>
         <Switch
              
              trackColor={{ false: "#DEDFE1", true: "#77C146" }}
              thumbColor={"#FFFFFF"}
              onValueChange={(value) => {
                console.log(value);
                for (let index = 0; index < roomList.length; index++) {
                    const tempArray = [...roomList]
                    tempArray[index].status = value
                    setRoomList(tempArray)
                }
                SetIsSwitchcontrol(value)
            }}
            value={isSwitchcontrol}
            /></View>
            {/* <View style={{ top:'-20%'}}>
        <Image
      style={styles.imager}
       source={require('../../../assets/images/on_room_small.png')}/>
        <Text style={styles.text3}>1 Rooms</Text>
        <Image
      style={styles.imager1}
       source={require('../../../assets/images/off_room_small.png')}/>
        <Text style={styles.text4}>0 Rooms</Text>
        </View> */}
        <FlatList
            style={styles.flatlist}
            data={roomList}
            renderItem={renderItem}
            numColumns={2}
          />
          {/* <Button onPress={()=>navigation.navigate('switchscreen')}></Button> */}
        </View>
      )
    },
  )
  