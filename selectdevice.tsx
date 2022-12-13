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

const windowsHeight = Dimensions.get('screen').height
const windowsWidth = Dimensions.get('screen').width
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
    marginVertical: 114,
    color: '#757575',
    fontSize: 14,
    textAlign: 'center',
    marginHorizontal: 16
  },
  inner1: {
    color: '#757575',
    width: 100,
    height: 40,
    marginHorizontal: 100,
    marginVertical: -140,
  },
  view1: {
    marginVertical: -15,
    marginHorizontal: -10,
    justifyContent:'center',
    alignItems:'center'
  },
  item: {
    // backgroundColor: '#d1aac8',
    padding: 10,
    marginVertical: 10,
    marginHorizontal: 20,
    alignItems: 'center'
  },
  btn: {
    alignSelf: 'flex-end',
        width: windowsWidth * 0.3,
        margin: 16,
        borderRadius: 6,
    // width: '20%',
    height: 36,
    marginHorizontal: '3%',
    marginVertical: '130%',
    // backgroundColor: '#77C146',
    // borderRadius: 6
  },
  btntxt: {
    width: 40,
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

export const SelectdeviceScreen: FC<StackScreenProps<NavigatorParamList, "selectdevice">> = observer(
  ({ navigation }) => {
    let nextScreen = () => navigation.navigate("deviceadded", selectId )
    const goBack = () => navigation.goBack()
    const DATA = [
      {
        name: 'Mobile 1',
      },
      {
        name: 'Switch',
      },
      {
        name: 'Mobile 2'
      },
    ];

    const [selectId, setSelectedId] = useState('');
    const [disabled, setDisabled] = useState(null)
    const [selectitems, setSelectitems] = useState([])

    useEffect(() => {
     
     
    }, [selectId])
    const renderItem = ({ item }) => {
      const backgroundColor = item === selectId ? "#E4F3DA" : "#ffffff";
      return (
        <TouchableOpacity activeOpacity={0.3} onPress={() => {
          setSelectedId(item.name)
          setSelectitems(item)
         
         
        }}
          style={{ ...styles.touch, backgroundColor:  item.name === selectId ? "#E4F3DA" : "#ffffff" }}>
         
       
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
        <Text style={styles.text}>Select Device</Text>
        <View style={styles.view1}>
          <Text style={styles.main}>Please select devices from the below listed devices.</Text>
        </View>
        <View style={styles.view}>
          <FlatList
            data={DATA}
            renderItem={(item) => renderItem(item)}
          //  keyExtractor={(item) => item.id}
          />
        </View>
        <Button activeOpacity={0.2} onPress={() => nextScreen()} style={{ ...styles.btn, backgroundColor: selectitems.length != 0 ? '#77C146' : '#DEDFE1' }}>
        <Text style={{ ...styles.btntxt, color: selectitems.length != 0 ? 'white' : '#757575' }}>Next</Text>
        </Button>
      </View>
    )
  },
)
