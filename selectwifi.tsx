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


const FULL: ViewStyle = { flex: 1, backgroundColor: 'white' }
const styles = StyleSheet.create({

  text: {
    width: 120,
    height: 23,
    marginHorizontal: '15%',
    marginVertical: '-15%',
    color: '#FFFFFF',
   
    fontSize: 16,
  },
  view: {
    width: 411,
    height: 93,
    marginVertical: -80,
  },
  images: {
    height: 24,
    width: 24,
    // marginLeft:-350
    //    marginHorizontal:1
  },
  touch: {
    width: '90%',
    height: 48,
    marginHorizontal: 10,

    padding: 15,
    flexDirection: 'row',
    justifyContent: 'flex-start'
  },
  gtext: {
    color: '#212121',
    //width: '50%',
    height: 48,
    marginHorizontal: 10,
    //padding:1,
    fontWeight: 'bold',
    //flexDirection: 'row'
    //backgroundColor:'green',

  },
  main: {
    width: 300,
    height: 40,
    marginHorizontal: '30%',
    marginVertical: '32%',
    color: '#757575',
    fontSize: 14
  },
  inner: {
    color: '#757575',
    width: 100,
    height: 40,
    marginHorizontal: 166,
    marginVertical: -140,
  },
  view1: {
    marginVertical: -15,
    marginHorizontal: -10
  },
  item: {
    // backgroundColor: '#d1aac8',
    padding: 10,
    marginVertical: 10,
    marginHorizontal: 20,
    alignItems: 'center'
  },
  btn: {
    width: '90%',
    height: 36,
    marginHorizontal: '5%',
    marginVertical: '135%',
    backgroundColor: '#77C146',
    borderRadius: 6
  },
  btntxt: {
    width: 100,
    height: 20,
    marginHorizontal: 70,
    marginVertical: 100,
  },

  image: {
    width: 24,
    height: 24,
    marginLeft: '70%'

  }

})

export const SelectwifiScreen: FC<StackScreenProps<NavigatorParamList, "selectwifi">> = observer(
  ({ navigation }) => {
    let nextScreen = () => navigation.replace("connectwifi", selectId )
    const goBack = () => navigation.goBack()
    const DATA = [
      {

        name: 'Wifi 1'


      },
      {

        name: 'Wifi 2',

      },

    ];
    const [selectitems, setSelectitems] = useState([])
    const [selectId, setSelectedId] = useState('');
    const [disabled, setDisabled] = useState(null)

    useEffect(() => {
      console.log('useEffect / selectId / =====>>', selectId)
     
    }, [selectId])
    const renderItem = ({ item }) => {
      const backgroundColor = item === selectId ? "#E4F3DA" : "#ffffff";
      return (
        <TouchableOpacity activeOpacity={0.3} onPress={() => {
          setSelectedId(item.name)
          setSelectitems(item)
          console.log(item, '========>')
          //console.log('selectId ========>',selectId)
        }}
          style={{ ...styles.touch, backgroundColor:  item.name === selectId ? "#E4F3DA" : "#ffffff" }}>
          <Image source={require('../../../assets/images/wifi_lock_black_24dp.png')} style={styles.images} />

          <Text style={styles.gtext}>{item.name}</Text>
          {
           item.name === selectId &&
            <Image
              style={styles.image}
              source={require('../../../assets/images/done.png')} />
          }
        </TouchableOpacity>

      );
    };
    return (
      <View testID="SelectwifiScreen" style={FULL}>
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
        <Text style={styles.text}>Search Wi-Fi</Text>
        <View style={styles.view1}>
          <Text style={styles.main}>Choose Wi-Fi and connect</Text>
        </View>
        <View style={styles.view}>
          <FlatList
            data={DATA}
            renderItem={(item) => renderItem(item)}
          //  keyExtractor={(item) => item.id}
          />
        </View>
        <Button activeOpacity={0.2} onPress={() => nextScreen()} style={{ ...styles.btn, backgroundColor: selectitems.length != 0 ? '#77C146' : '#DEDFE1' }}>
        <Text style={{ ...styles.btntxt, color: selectitems.length != 0 ? 'white' : '#757575' }}>Select Wi-Fi</Text>
        </Button>
      </View>
    )
  },
)
