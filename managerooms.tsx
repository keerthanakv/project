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
    animation: {
        width: '65%',
        height: '65%',
        marginHorizontal: '2%',
        marginVertical: '15%'
      },
      headertext:{
        color: '#FFFFFF',
        fontSize: 16,
        marginStart: '10%',
        marginVertical:'-12%'
       },
})

export const ManageRoomsScreen: FC<StackScreenProps<NavigatorParamList, "manageroomsscreen">> = observer(
  ({ navigation, route }) => {
    const RoomScreen = (item) => navigation.navigate("RoomScreen", { "roomName": item.roomName })
    const goBack = () => navigation.goBack()
   
    return (
      <View testID="manageroomsscreen" style={FULL}>
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
        <LottieView
            source={require('../../../assets/images/no_room.json')}
            autoPlay={true}
            //autoSize={true}
            style={styles.animation}
          />
       <Text text="No Rooms" style={{color:'#2A2A2A',fontSize:14,fontWeight:'900',marginVertical:'-35%',textAlign:'center'}}></Text>
       <Text text="Please add a Room to Manage Room." style={{color:'#757575',fontSize:12,marginVertical:'36%',textAlign:'center'}}></Text>
      </View>

    )

  },
)


