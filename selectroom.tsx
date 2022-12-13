import React, { FC, useEffect, useState } from "react"
import { View, ViewStyle, TextStyle, ImageStyle, SafeAreaView, StyleSheet, Image, TouchableOpacity, StatusBar, FlatList, AsyncStorage } from "react-native"
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
import ActionSheet, { SheetManager } from "react-native-actions-sheet"


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
    width: '100%',
    height: 48,
    marginHorizontal: 14,
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
    marginHorizontal: '18%',
    marginVertical: 114,
    color: '#757575',
    fontSize: 14
  },

  view1: {
    marginVertical: -15,
    marginHorizontal: -10
  },
  viewt: {
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
    width: '90%',
    height: 36,
    marginHorizontal: '5%',
    marginVertical: '-60%',
    backgroundColor: '#77C146',
    borderRadius: 6
  },
  btntxt: {
    width: 80,
    height: 20,
    marginHorizontal: 80,
    marginVertical: 100,
  },

  image: {
    width: 24,
    height: 24,
    marginLeft: '40%',
   

  },
  flatlistStyle: {
    width: '100%',
    height: '100%',
    marginVertical: -40,
    marginHorizontal:'-1%'
},
container: {
  height: 150,

},
textinput2: {
  width: '80%',
  height: 46,
  marginHorizontal: 16,
  marginVertical: '20%',
  borderColor: '#E0E0E0',
  borderRadius: 6,
  borderWidth: 2
},
btn1: {
  width: '80%',
  height: 36,
  marginHorizontal: '5%',
  marginVertical: '-10%',
  backgroundColor: '#77C146',
  borderRadius: 6
},
btntxt1: {
  width: '-10%',
  height: 20,
},
})

export const SelectroomScreen: FC<StackScreenProps<NavigatorParamList, "selectroom">> = observer(
  ({ navigation ,route}) => {
    const nextScreen = async () => {
      // AppStore.passNavigationInfo(JSON.stringify(selectitems))
      if (route.params === 'Change Room') {
          navigation.pop()
      } else {
          await AsyncStorage.setItem("isDeviceAdded", JSON.stringify(true))
          navigation.popToTop()
          navigation.navigate("homescreen")
      }
  }
    const goBack = () => navigation.goBack()
    const [selectitems, setSelectitems] = useState([]);
    const [selectId, setSelectedId] = useState('');
    const [edit, setEdit] = useState('');
    const[place,setPlace]=useState('Room Name');
    const [room, setRoom] = useState([
      {
          roomName: "Living Room"
      },
      {
          roomName: "Jeo's Bedroom"
      },
      {
          roomName: "Add Custom Room"
      }
  ]);
  const add = () => {
    const tempArray = [...room]
    let obj = { roomName: edit }
    tempArray.splice(tempArray.length - 1, 0, obj)
    setRoom(tempArray)
    setEdit('')
}
  const  Renderlist=(item, index)=>{
    const backgroundColor = item === selectId ? "#E4F3DA" : "#ffffff";
      return (
        <TouchableOpacity activeOpacity={0.3} onPress={() => {
          if (item.roomName === 'Add Custom Room') {
            setSelectedId(null)
              SheetManager.show('room_sheet')
          } else {
            setSelectedId(item)
          }
          setSelectitems(item)
      }}
          style={{ ...styles.touch, backgroundColor:backgroundColor}}
          >
         
       
          <Text style={styles.gtext}>{item.roomName}</Text>
          {
           item.roomName === selectId &&
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
        <Text style={styles.text}>Select Room</Text>
        <View style={styles.viewt}>
          <Text style={styles.main}>Select Room from below or Add custom Room</Text>
        </View>
        <View style={styles.flatlistStyle}>
        <FlatList
            data={room}
            keyExtractor={(item, index) => index + ''}
            renderItem={({ item, index }) => Renderlist(item, index)}
            style={styles.flatlistStyle}
                    />
        </View>
        <ActionSheet
          id="room_sheet"
          initialOffsetFromBottom={1}
          gestureEnabled={true}
          extraScroll={10}
          containerStyle={styles.container}
          headerAlwaysVisible={true} 
          >
             <View style={styles.view} >
            <TextInput
              style={styles.textinput2}
              placeholder={place}
              keyboardType="default"
              onChangeText={(edit) => setEdit(edit)}
              editable={true}
             value={edit}
             
            />
            <Button activeOpacity={0.2} onPress={() => add()} 
            style={styles.btn1}>
          <Text style={styles.btntxt1}>Add</Text>
        </Button>
            </View>
          </ActionSheet>
        <Button activeOpacity={0.2} onPress={() => selectitems != null &&navigation.navigate('dashboardscreen')} style={{ ...styles.btn, backgroundColor: selectitems.length != 0 ? '#77C146' : '#DEDFE1' }}>
          <Text style={{ ...styles.btntxt, color: selectitems.length != 0 ? 'white' : '#757575' }}>Complete</Text>
        </Button>
      </View>
    )
  },
)
