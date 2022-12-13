import React, { FC, useEffect, useState } from "react"
import { View, ViewStyle, TextStyle, ImageStyle, SafeAreaView, StyleSheet, Image, TouchableOpacity, StatusBar, FlatList, Dimensions, Switch, Keyboard } from "react-native"
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
import ActionSheet, { SheetManager } from "react-native-actions-sheet"

const windowsWidth = Dimensions.get('screen').width
const  windowsHeight=Dimensions.get('screen').height

const FULL: ViewStyle = { flex: 1, backgroundColor: 'white' }
const styles = StyleSheet.create({
   headertext:{
    color: '#FFFFFF',
    fontSize: 16,
    marginHorizontal: '15%',
    marginVertical: '-15%',
   },
   flatlist: {
    width: windowsWidth,
    marginTop: '30%',
   },
   view: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16
},
onSwitch: {
    borderRadius: 6,
    backgroundColor: '#DFDFDF',
    padding: 6
},
on:{
    width:24,
    height:24
},
itemContainer: {
    width: windowsWidth * 0.44,
    backgroundColor: '#FFFFFF',
    borderColor: '#E2E2E2',
    borderWidth: 1,
    borderRadius: 14,
    marginStart: windowsWidth > 350 ? 18 : 12,
    marginBottom: 10,
    padding: 12
},
})

export const ManageRoomScreen: FC<StackScreenProps<NavigatorParamList, "manageroomscreen">> = observer(
  ({ navigation, route }) => {
    const RoomScreen = (item) => navigation.navigate("RoomScreen", { "roomName": item.roomName })
    const goBack = () => navigation.goBack()
    const [roomList, setRoomList] = useState([
        {
            id: 1,
            roomName: "Living Room",
            linkedSwitch: "2"

        },
        {
            id: 2,
            roomName: "Kitchen",
            linkedSwitch: "2"
        },
        {
            id: 3,
            roomName: "John's Bedroom",
            linkedSwitch: "2"
        },
        {
            id: 4,
            roomName: "Hall",
            linkedSwitch: "2"
        },

    ])
    const roomRender=(item,index)=>{
        return(
        <TouchableOpacity style={styles.itemContainer} onPress={() => {
            RoomScreen(item)
        }}
        activeOpacity={0.8}>
             <View style={styles.view}>
                        <View style={styles.onSwitch}>
                        <Image  style={styles.on}
             source={require('../../../assets/images/on_room_small.png')} />
                        </View>
                        <TouchableOpacity
                            style={{ ...styles.onSwitch, backgroundColor: 'transparent' }}
                            onPress={() => {
                                RoomScreen(item)
                            }}>
                            <MaterialIcons
                                name="arrow-forward-ios"
                                size={18}
                                color={'#0A56A2'} />
                        </TouchableOpacity>
                    </View>
        
<Text style={{ fontSize: 14,  color: '#212121' }}>{item.roomName}</Text>
<View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <MaterialIcons name='link' color={'#5F6368'} size={16} />
                        <Text
                            style={{ fontSize: 12,  color:'#757575', marginTop: 2 }}
                            >{' ' + item.linkedSwitch + ' Switches'}</Text>
                    </View>
        </TouchableOpacity>
    )
    }
    return (
      <View testID="manageroomscreen" style={FULL}>
        <StatusBar
          animated={true}
          backgroundColor="#0A56A2"
        />
        
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
        <Text style={styles.headertext}>Manage Rooms</Text>
        <View>
                        <FlatList
                            data={roomList}
                            keyExtractor={(item, index) => index + ''}
                            numColumns={2}
                            renderItem={({ item, index }) => roomRender(item, index)}
                            style={styles.flatlist}
                        />
                    </View>
      </View>

    )

  },
)


