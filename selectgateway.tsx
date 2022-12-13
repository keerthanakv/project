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
    marginVertical: 160,



  },
  touch: {
    width: '90%',
    height: 48,
    marginHorizontal: 10,
    padding: 5,
    flexDirection: 'row',
    justifyContent:'space-between'
  },
  gtext: {
    color: '#212121',
    //width: '50%',
    height: 48,
    marginHorizontal: 10,
    padding: 5,
    alignItems: 'center',
    fontWeight: 'bold',
    //flexDirection: 'row'
    //backgroundColor:'green',

  },
  main: {
    width: 300,
    height: 40,
    marginHorizontal: 59,
    marginVertical: 114,
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
    width: '25%',
    height: '5%',
    marginHorizontal: '70%',
    marginVertical: '70%',
    backgroundColor: '#77C146',
    borderRadius: 6
  },
  btntxt: {
    width: '44%',
    height: '100%',
    marginHorizontal: '10%',
    marginVertical: '15%',
  },
  image: {
    width: 24,
    height: 24,
  }

})

export const SelectgatewayScreen: FC<StackScreenProps<NavigatorParamList, "selectgateway">> = observer(
  ({ navigation }) => {
    let nextScreen = () => navigation.navigate("connectwifi")
    const goBack = () => navigation.goBack()
    const [selectitems, setSelectitems] = useState([])
    const DATA = [
      {
        id: '1',
        name: 'Gateway 1',


      },
      {
        id: '2',
        name: 'Gateway 2',

      },

    ];



    const [selectId, setSelectedId] = useState(null);
    const[disabled,setDisabled]=useState(false)
    const renderItem = ({ item }) => {

      const backgroundColor = item.id === selectId ? "#E4F3DA" : "#ffffff";
      //setDisabled(true)
      return (
        <TouchableOpacity activeOpacity={0.3} onPress={() => {
          setSelectedId(item.id)
          setSelectitems(item)

        }}
          style={{ ...styles.touch, backgroundColor: backgroundColor }}>

          <Text style={styles.gtext}>{item.name}</Text>
          {
            item.id === selectId &&
            <Image
              style={styles.image}
              source={require('../../../assets/images/done.png')} />
          }

   

        </TouchableOpacity>
      );
    };



    return (
      <View testID="SelectgatewayScreen" style={FULL}>
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
        <Text style={styles.text}>Select Gateway</Text>
        <View style={styles.view1}>
          <Text style={styles.main}>Please select Gateway from the below listed </Text><Text style={styles.inner}>device.</Text>
        </View>
        <View style={styles.view}>
          <FlatList
            data={DATA}
            renderItem={(item) => renderItem(item)}
            keyExtractor={(item) => item.id}
          />

        </View>
        {/* disabled={disabled}  */}
        <Button activeOpacity={0.2} onPress={() => nextScreen()} style={{ ...styles.btn, backgroundColor: selectitems.length != 0 ? '#77C146' : '#DEDFE1' }}>
        <Text style={{ ...styles.btntxt, color: selectitems.length != 0 ? 'white' : '#757575' }}>Next</Text>
        </Button>
      </View>

    )

  },
)
