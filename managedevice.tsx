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
        marginHorizontal: 60,
        marginVertical: -55,
        color: '#FFFFFF',
        fontSize: 16,
      },
    animation: {
        width: '100%',
        height: '100%',
        marginHorizontal: '-12%',
        marginVertical: '-5%'
      },
    btn: {

        width: '25%',
        height: 36,
        marginHorizontal: '38%',
        marginVertical: '-40%',
        backgroundColor: '#77C146',
        borderRadius: 6
      },
    btntxt: {
        width: 80,
        height: 20,
      },
})

export const ManageDevicesScreen: FC<StackScreenProps<NavigatorParamList, "managedevicesscreen">> = observer(
  ({ navigation, route }) => {
    const switchlistscreen = (item) => navigation.navigate("switchlistscreen", item)

    const goBack = () => navigation.goBack()
  
    return (
      <View testID="manageuserscreen" style={FULL}>
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
        <Text style={styles.text}>Manage Devices</Text>
        {/* </View> */}
        <LottieView
            source={require('../../../assets/images/No Device.json')}
            autoPlay={true}
            //autoSize={true}
            style={styles.animation}
          />
       <Text text="No Devices" style={{color:'#2A2A2A',fontSize:14,fontWeight:'900',marginVertical:'-60%',textAlign:'center'}}></Text>
       <Text text="Please add a Device to Manage Device," style={{color:'#757575',fontSize:12,marginVertical:'62%',textAlign:'center'}}></Text>
       <Button activeOpacity={0.2} style={styles.btn} onPress={()=>navigation.navigate("adddevice" )}>
          <Text style={styles.btntxt}>Add Device</Text>
        </Button>
      </View>

    )

  },
)
