import React, { FC, useEffect, useState } from "react"
import { View, ViewStyle, TextStyle, ImageStyle, SafeAreaView, StyleSheet, Image, TouchableOpacity, StatusBar, FlatList, Dimensions } from "react-native"
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

const windowsWidth = Dimensions.get('screen').width

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
    flatlistContainer: {
        //height: windowsHeight * 0.17,
        width: windowsWidth * 0.44,
        backgroundColor:'#FFFFFF',
        borderColor: '#E2E2E2',
        borderWidth: 1,
        borderRadius: 14,
        marginStart: windowsWidth > 350 ? 16 : 12,
        marginBottom: 16,
        padding: 12
    },
    view: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 16
    },
    SwitchView: {
        borderRadius: 6,
        backgroundColor: '#DFDFDF',
        padding: 6
    },
    flatlist: {
        width: windowsWidth,
        marginTop: '30%',
        //paddingHorizontal: 16,
        //backgroundColor:'red'
    },
})

export const ManageDeviceScreen: FC<StackScreenProps<NavigatorParamList, "managedevicescreen">> = observer(
  ({ navigation, route }) => {
    const switchlistscreen = (item) => navigation.navigate("switchlistscreen", item)

    const goBack = () => navigation.goBack()
    const [deviceList, setDeviceList] = useState([
        {
            id: 1,
            deviceName: "4 Node Switch",
            linkedSwitch: "2",
            unLinkedSwitch: "2"
        },
        {
            id: 2,
            deviceName: "Node Switch 1",
            linkedSwitch: "2",
            unLinkedSwitch: "2"
        },
        {
            id: 3,
            deviceName: "Node Switch 2",
            linkedSwitch: "2",
            unLinkedSwitch: "2"
        },
        {
            id: 4,
            deviceName: "Node Switch 9",
            linkedSwitch: "2",
            unLinkedSwitch: "2"
        },

    ])
    const deviceListRender = (item, index) => {
        return (
            <TouchableOpacity
                style={styles.flatlistContainer}
                onPress={() => {
                     switchlistscreen(item)
                }}
                activeOpacity={0.8}>

                <View style={styles.view}>
                    <View style={styles.SwitchView}>
                        <Image source={require('../../../assets/images/nod.png')}style={{width:24,height:24}} />
                    </View>

                    <TouchableOpacity
                        style={{ ...styles.SwitchView, backgroundColor: 'transparent' }}
                        onPress={() => {
                            switchlistscreen(item)
                        }}>
                        <MaterialIcons
                            name="arrow-forward-ios"
                            size={18}
                            color={'#0A56A2'} />
                    </TouchableOpacity>
                </View>

                <Text
                    style={{ fontSize: 14, color: '#212121' }}
                    text={item.deviceName}
                />

                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <MaterialIcons name='link' color={'#77C146'} size={18} />
                    <Text
                        style={{ fontSize: 12,  color: '#757575', marginTop: 2 }}
                        text={' ' + item.linkedSwitch + ' Switches'} />
                </View>

                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <MaterialIcons name='link-off' color='#5F6368' size={18} />
                    <Text
                        style={{ fontSize: 12, color: '#757575', }}
                        text={' ' + item.unLinkedSwitch + ' Switches'} />
                </View> 

            </TouchableOpacity >
        )
    }
     
    return (
      <View testID="manageuserscreen" style={FULL}>
        <StatusBar
          animated={true}
          backgroundColor="#0A56A2"
        />
        {/* <View style={{ height: 90,
        width: windowsWidth,
        backgroundColor: '#0A56A2',
        borderBottomStartRadius: 20,
        borderBottomEndRadius: 20,
        flexDirection: 'row',
        alignItems: 'center'}}> */}
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
        <Text style={styles.text}>Manage Devices</Text>
        {/* </View> */}
        <View>
                        <FlatList
                            data={deviceList}
                            keyExtractor={(item, index) => index + ''}
                            numColumns={2}
                            renderItem={({ item, index }) => deviceListRender(item, index)}
                            style={styles.flatlist}
                        />
                    </View>
      </View>

    )

  },
)
