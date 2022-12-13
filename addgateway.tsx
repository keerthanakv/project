import React, { FC, useEffect, useState } from "react"
import { View, ViewStyle, TextStyle, ImageStyle, SafeAreaView, StyleSheet, Alert, TouchableOpacity, StatusBar } from "react-native"
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
import { TextInput } from "react-native-gesture-handler"
import LottieView from 'lottie-react-native';


const FULL: ViewStyle = { flex: 1, backgroundColor: 'white' }
const styles = StyleSheet.create({

  text: {
    width: 109,
    height: 23,
    marginHorizontal: '15%',
    marginVertical: '-15%',
    color: '#FFFFFF',
 
    fontSize: 16,
  },
  view: {
    marginHorizontal: -15
  },
  main: {
    width: 222,
    height: 40,
    marginHorizontal: 100,
    marginVertical: 119,
    color: '#757575',
    fontSize: 14
  },
  inner: {
    color: '#212121',
    width: 222,
    height: 40,
    marginHorizontal: 100,
    marginVertical: 119,

  },
  inner1: {
    color: '#212121',
    width: 222,
    height: 40,
    marginHorizontal: 140,
    marginVertical: -140
  },
  animation: {
    width: 328,
    height: 328,
    marginHorizontal: 16,
    marginVertical: 100
  },
  search: {
    width: '45%',
    height: 19,
    color: '#757575',
    marginHorizontal: 150,
  }


})

export const AddgatewayScreen: FC<StackScreenProps<NavigatorParamList, "addgateway">> = observer(
  ({ navigation }) => {
    let nextScreen = () => navigation.replace("selectgateway")
    const goBack = () => navigation.goBack()

    const [textc, setTextc] = useState("Searching Device...");
    useEffect(() => {

      const timer1 = setTimeout(() => {
        setTextc('Gatway found...')
      }, 3000);
      const timer2 = setTimeout(() => {
        nextScreen()
      }, 5000);
      return () => {
        clearTimeout(timer1);
        clearTimeout(timer2);
      }
    }, []);







    return (
      <View testID="AddgatewayScreen" style={FULL}>
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
        <Text style={styles.text}>Add Gateway</Text>
        <View style={styles.view}>
          <Text style={styles.main}>Please be <Text style={styles.inner}>Five Feet</Text> closer to the</Text><Text style={styles.inner1}> Gateway Device.</Text>
        </View>
        <View style={styles.view}>
          <LottieView
            source={require('../../../assets/images/searching_devices.json')}
            autoPlay={true}
            //autoSize={true}
            style={styles.animation}
          />
        </View>
        <View style={styles.view}>
          <Text style={styles.search}>{textc}</Text>
        </View>

        {/* <Text style={styles.search}>Gateway Found</Text> */}
      </View>

    )

  },
)
