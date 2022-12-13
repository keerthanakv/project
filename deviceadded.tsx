import React, { FC, useEffect, useRef, useState } from "react"
import { View, ViewStyle, TextStyle, ImageStyle, SafeAreaView, StyleSheet, Image, TouchableOpacity, StatusBar, FlatList, Switch, Keyboard, Dimensions } from "react-native"
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
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import ActionSheet, { SheetManager } from "react-native-actions-sheet";
const windowsHeight = Dimensions.get('screen').height
const windowsWidth = Dimensions.get('screen').width
const FULL: ViewStyle = { flex: 1, backgroundColor: 'white' }
const styles = StyleSheet.create({
  view:{
    marginVertical:'1%',
    marginHorizontal:'5%',
  },
  main: {

    width: 300,
    height: 40,
    marginHorizontal: 100,
    marginVertical: '5%',
    color: '#111111',
    fontSize: 18,
    fontWeight: 'bold'
  },
  view1: {
    marginVertical: -15,
    marginHorizontal: -10
  },
  btn: {
    width: '90%',
    height: 36,
    marginHorizontal: '5%',
    marginVertical: '-30%',
    backgroundColor: '#77C146',
    borderRadius: 6
  },
  btntxt: {
    width: '40%',
    height: 20,
  },
  btn1: {
    width: '90%',
    height: 36,
    marginHorizontal: '5%',
    marginVertical: '-100%',
    backgroundColor: '#77C146',
    borderRadius: 6
  },
  btntxt1: {
    width: '-10%',
    height: 20,
  },
  textinput1: {
    width: '90%',
    height: 46,
    marginHorizontal: 16,
    marginVertical: '25%',
    borderColor: '#E0E0E0',
    borderRadius: 6,
    borderWidth: 2
  },
  view3: {
    marginVertical: -90
  },
  image: {
    width: 35.99,
    height: 36,
    marginHorizontal: '45%',
    marginVertical: '5%'
  },
  text: {
    fontWeight: 'bold',
    color: '#111111',
    width: 71,
    height: 23,
    marginHorizontal: '4%'
  },
  text1: {
    color: '#757575',
    marginHorizontal: '4%'
  },
  fl: {
    color: '#111111',
    fontSize: 14,
    width: 60,
    height: 20,
    marginHorizontal: '-35%',
    marginVertical: '10%',
    marginTop: 19
  },
  t1: {
    width: windowsWidth * 0.44,
   
    borderWidth: 1,
    borderRadius: 14,
    marginEnd: 15,
    marginBottom: 18,
    padding: 45
    // width: '30%',
    // borderRadius: 14,
    // backgroundColor: '#FFFFFF',
    // borderColor: '#E2E2E2',
    // marginEnd: 16,
    // marginBottom: 16,
    // borderWidth: 2,
    // padding: 30,
    // height: '90%',
    // marginHorizontal: '10%',
  },
  t2: {
    width: 30,
    height: 30,
    marginHorizontal: '109%',
    marginVertical: '-19%'
  },
  switchtype: {
    width: 16,
    height: 16,
    marginHorizontal: '-35%'
  },
  container: {
    height: 300,

  },
  textinput2: {
    width: '90%',
    height: 46,
    marginHorizontal: 16,
    marginVertical: '15%',
    borderColor: '#E0E0E0',
    borderRadius: 6,
    borderWidth: 2
  },
  text2: {
    color: '#666666',
    marginHorizontal: '5%',
    marginVertical: '-10%'
  },
  switch: {
    width: 48,
    height: 24,
    marginHorizontal: '5%',
    marginVertical: '12%'
  },
  text3: {
    color: '#111111',
    width: 100,
    height: 17,
    fontSize: 12,
    marginHorizontal: '-5%',
    marginVertical: '-30%'
  },
  done: {
    // borderRadius: 18,
    // flexDirection: 'row',
    // width: '10%',
    // justifyContent: 'space-between',
    // alignItems: 'center',
    height:34,
    width:35,
    borderRadius:6,
    marginHorizontal:'-1%',
    backgroundColor: '#77C146',
    padding: 5,
},
offSwitch: {
   height:34,
  width:35,
  marginHorizontal:'-1%',
  borderRadius: 6,
  backgroundColor:'#E2E2E2',
  padding: 5,
},
tview:{
  flexDirection: 'row',
        width: '100%',
        marginHorizontal:'-40%',
        marginVertical:'-25%',
        justifyContent: 'space-between',
        // alignItems: 'center',
 
},
tview1:{
  flexDirection: 'row',
        width: '100%',
        marginHorizontal:'100%',
        marginVertical:'-19%',
        justifyContent: 'space-between',
        // alignItems: 'center',
 
},
flatlistStyle: {
  width: windowsWidth,
  marginTop: windowsHeight > 800 ? 16 : windowsHeight > 700 ? 8 : 4,
  //marginBottom: windowsHeight < 800 ? windowsHeight * 0.5 : windowsHeight * 0.4,
  marginBottom: windowsHeight > 800 ? windowsHeight * 0.4 :
      windowsHeight > 700 ? windowsHeight * 0.3 : windowsHeight * 0.5,
      marginHorizontal:'5%'
},
})

export const DeviceaddedScreen: FC<StackScreenProps<NavigatorParamList, "deviceadded">> = observer(
  ({ navigation, route }) => {
    let nextScreen = () => navigation.replace("selectroom")

    const [isEnabled, setIsEnabled] = useState(false);
    const [selectitems, setSelectitems] = useState([])
    const [data, setData] = useState([
      {
        id: '1',
        name: 'Switch 1',
        isToggle: false
      },
      {
        id: '2',
        name: 'Switch 2',
        isToggle: false
      },
      {
        id: '3',
        name: 'Switch 3',
        isToggle: false
      },
      {
        id: '4',
        name: 'Switch 4',
        isToggle: false
      }
    ]);
    const [text, setText] = useState(null);
    const [edit, setEdit] = useState('');
    const[place,setPlace]=useState('Switch Name');
    const [itempos, setItempos] = useState(0);
    let actionSheetRef = useRef(null);
    const [name,setName]=useState([]);
    const toggleSwitch = (value) => {      
      const tempArray = [...data]
      tempArray[itempos].isToggle = value
      setData(tempArray)
    }

  //  const update=(key,value)=>{
  //   setParams(old=>({
  //     ...old,
  //     [key]:value,
  //   }));
  //  }
  const addToRoom = () => {
    let list = []
    for (let id in selectitems) {
        list.push(data.filter(item => item.id == selectitems[id]))
    }
    nextScreen()
}
  const updateSwitch = () => {
    const tempArray = [...data]
    tempArray[itempos].name = edit
    setData(tempArray)
    setEdit('')
    setItempos(0)
  }
    const showActionSheet = () => {
      actionSheetRef.current?.show();
    }
    const getSelected = (item) => selectitems.includes(item.id)
    let multiSelect = (item) => {
      if (selectitems.includes(item.id)) {
        const newlistitem = selectitems.filter(itemId => itemId != item.id)
        return setSelectitems(newlistitem)
      }
      setSelectitems([...selectitems, item.id])
    }

    const renderItem = ({ item, index }) => {
     // console.log(index);
       //console.log(item.name);
      //console.log(item.key);
       

      return (

        <TouchableOpacity
          activeOpacity={0.3}
          style={{ ...styles.t1, borderColor: getSelected(item) ? '#77C146' : '#E2E2E2' }}
          onPress={() => {
            if (selectitems.length > 0) {
              multiSelect = (item)
            }
          }}
          onLongPress={() => {
            multiSelect(item)
        }}>
          <View style={styles.tview}>
          <TouchableOpacity onPress={() => multiSelect(item)}>
             {getSelected(item) ? 
             <Image style={styles.done}
             source={require('../../../assets/images/done1.png')}/>  : 
             <Image  style={styles.offSwitch}
             source={require('../../../assets/images/off_switch_large.png')} />}
          </TouchableOpacity></View>
          {/* <View style={styles.tview1}> */}
          {
                            !getSelected(item) &&
          <TouchableOpacity activeOpacity={0.3} onPress={() => {
            setItempos(index)
            setPlace(item.name)
            //setParams([...params,item.key])
            showActionSheet()

          }} style={styles.t2}>
            
            <MaterialIcons name={"edit"} size={25} color={'#0A56A2'} />
          </TouchableOpacity>
    }
          <Text style={styles.fl}>{item.name}</Text>
          <Image
            style={styles.switchtype}
            source={require('../../../assets/images/switch_type.png')} />

          <Text style={styles.text3}>{item.isToggle ? 'Toggle Switch' : 'Normal Switch'}</Text>
          <ActionSheet
            ref={actionSheetRef}
            initialOffsetFromBottom={1}
            gestureEnabled={true}
            extraScroll={10}
            containerStyle={styles.container}
            headerAlwaysVisible={true}>
            <View style={styles.view} >
            <TextInput
              style={styles.textinput2}
              placeholder={place}
              keyboardType="default"
              onChangeText={(edit) => setEdit(edit)}
              editable={true}
             value={edit}
             
            />
            <Text style={styles.text2}>Toggle Switch?</Text>
            <Switch
              style={styles.switch}
              trackColor={{ false: "#DEDFE1", true: "#77C146" }}
              thumbColor={isEnabled ? "#FFFFFF" : "#FFFFFF"}
              onValueChange={(value) => toggleSwitch(value)}
              value={data[itempos].isToggle}
            />
            <Button activeOpacity={0.2} onPress={() => updateSwitch()} 
            style={styles.btn1}>
          <Text style={styles.btntxt1}>Update</Text>
        </Button>
        </View>
          </ActionSheet>
       
        </TouchableOpacity>
        

      );
    };



    return (
      <View testID="DeviceaddedScreen" style={FULL}>
        <StatusBar
          animated={true}
          backgroundColor="#FFFFFF"
        />
        <Image
          style={styles.image}
          source={require('../../../assets/images/success.png')} />
        <View style={styles.view1}>
          <Text style={styles.main}>Device Added Successfully! </Text>
        </View>
        <View style={styles.view3} >
          <TextInput style={styles.textinput1}
            placeholder="Devices"
            onChangeText={(text) => setText(text)}
            editable={true}
            value={route.params}
          />
        </View>
        <Text style={styles.text}>Switches</Text>
        <Text style={styles.text1}>Long press on each switch to select</Text>
        <View>
          <FlatList

            data={data}
            renderItem={renderItem}
            numColumns={2}
            style={styles.flatlistStyle}
          />
         
        </View>
        <Button activeOpacity={0.2} onPress={() => addToRoom()} style={{ ...styles.btn, backgroundColor: selectitems.length != 0 ? '#77C146' : '#DEDFE1' }}>
          <Text style={{ ...styles.btntxt, color: selectitems.length != 0 ? 'white' : '#757575' }}>Add to a Room</Text>
        </Button>

      </View>

    )

  },
)
