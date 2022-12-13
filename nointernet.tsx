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
    animation: {
        width: 328,
        height: 328,
        marginHorizontal: '8%',
        marginVertical: '10%'
      },
})

export const NoInternetScreen: FC<StackScreenProps<NavigatorParamList, "nointernetscreen">> = observer(
  ({ navigation, route }) => {
  
  
    



    return (
      <View testID="NoInternetScreen" style={FULL}>
        <StatusBar
          animated={true}
          backgroundColor="#FFFFFF"
        />
       <LottieView
            source={require('../../../assets/images/no_wifi.json')}
            autoPlay={true}
            //autoSize={true}
            style={styles.animation}
          />
       <Text text="No Connection" style={{color:'#2A2A2A',fontSize:14,fontWeight:'900',textAlign:'center'}}/>
       <Text text="Please check your Internet Connection " style={{color:'#757575',fontSize:12,textAlign:'center'}}/>
       <Text text="and try again." style={{color:'#757575',fontSize:12,textAlign:'center'}}/>
        
      </View>

    )

  },
)
