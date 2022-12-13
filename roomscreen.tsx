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
   headertext:{
    color: '#FFFFFF',
    fontSize: 16,
    marginHorizontal: '15%',
    marginVertical: '-15%',
   },
   flatlist: {
    width: windowsWidth,
    marginTop: '-10%',
   },
   view: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16
},
onSwitch: {
    borderRadius: 6,
    backgroundColor: '#DFDFDF',
    padding: 6
},
on:{
    width:24,
    height:24
},
itemContainer: {
    width: windowsWidth * 0.44,
    backgroundColor: '#FFFFFF',
    borderColor: '#E2E2E2',
    borderWidth: 1,
    borderRadius: 14,
    marginStart: windowsWidth > 350 ? 18 : 12,
    marginBottom: 10,
    padding: 10,
    
},
text: {
    width: '50%',
    height: 23,
    marginHorizontal: '15%',
    marginVertical: '-15%',
    color: '#FFFFFF',
    fontSize: 16,
  },
  done: {
    borderRadius: 18,
    backgroundColor: '#77C146',
    padding: 6,
},
offSwitch: {
    borderRadius: 6,
    backgroundColor: '#DFDFDF',
    padding: 6
},
container: {
    height: 200,
  },
  textinput2: {
    width: '90%',
    height: 46,
    marginHorizontal: 16,
    marginVertical: '1%',
    borderColor: '#E0E0E0',
    borderRadius: 6,
    borderWidth: 2
  },
  viewa:{
    marginVertical:'1%',
    marginHorizontal:'5%',
  },
  switch: {
    width: 48,
    height: 24,
    marginHorizontal: '5%',
    marginVertical: '1%'
  },
  btn1: {
    width: '90%',
    height: 36,
    marginHorizontal: '5%',
    marginVertical: '5%',
    backgroundColor: '#77C146',
    borderRadius: 6
  },
  btntxt1: {
    width: '-10%',
    height: 20,
  },
  text2: {
    color: '#666666',
    marginHorizontal: '5%',
    marginVertical: '-1%'
  },
  on1:{
    width:16,
    height:16,
    marginTop:'12%'
},
text1:{
    fontSize: 14,
    color: '#757575',
    marginHorizontal: '5%',
    marginVertical: '25%'
  },
})

export const RoomScreen: FC<StackScreenProps<NavigatorParamList, "RoomScreen">> = observer(
  ({ navigation, route }) => {
    const selectroom = () => navigation.navigate("selectroom", 'Change Room')
    const goBack = () => navigation.goBack()
    const [selectitems,setSelectitems]=useState([])
    const [roomName,setRoomName]=useState('')
    const [toggle, setToggle] = useState(false);
    const [selectedPos, setSelectedPos] = useState(0);
    const [edit, setEdit] = useState('');
    const[device,setDevice]=useState('Device Name');
    const [keyboardStatus, setKeyboardStatus] = useState(false);
    const[place,setPlace]=useState('Switch Name');
    const [tabPos, setTabPos] = useState(0);
    const [isEnabled, setIsEnabled] = useState(false);
    const [switchList,setSwitchList] = useState([
        {
            id: 1,
            switchName: "Switch 1",
            status: false,
            isToggle: false
        },
        {
            id: 2,
            switchName: "Switch 2",
            status: false,
            isToggle: false
        },
        {
            id: 3,
            switchName: "Switch 3",
            status: false,
            isToggle: false
        },
        {
            id: 4,
            switchName: "Switch 4",
            status: false,
            isToggle: false,
        },
    ])
    useEffect(() => {
        setRoomName(route.params.roomName)
    }, [])
    const updateSwitch = () => {
            const tempArray = [...switchList]
            tempArray[selectedPos].switchName = edit
            setSwitchList(tempArray)
            // setEdit('')
            // setItempos(0)
          }
          const toggleSwitch = (value) => {      
                const tempArray = [...switchList]
                tempArray[selectedPos].isToggle = value
                tempArray[selectedPos].status = false
                setSwitchList(tempArray)
              }
              const switching = (index, value) => {
               
                    const tempArray = [...switchList]
                    tempArray[index].status = value
                    setSwitchList(tempArray)
              }
    const multiSelect = (item) => {
        if (selectitems.includes(item.id)) {
            const newlistitem = selectitems.filter(itemId => itemId != item.id)
            return setSelectitems(newlistitem)
        }
        setSelectitems([...selectitems, item.id])
    }

    const getSelected = (item) => selectitems.includes(item.id)
    const roomRender=(item,index)=>{
        return(
            <TouchableOpacity
            style={{...styles.itemContainer,borderColor:getSelected(item)?'#77C146':'#E2E2E2'}}
            onPress={() => {
                if (selectitems.length > 0) {
                    multiSelect(item)
                }
            }}
            onLongPress={() => {
                multiSelect(item)
            }}
            activeOpacity={0.8}>
<View style={styles.view}>
                <TouchableOpacity
                            disabled={true}
                            style={
                                {
                                    ...getSelected(item) ?
                                        styles.done : item.status ? styles.onSwitch : styles.offSwitch
                                }
                            }
                            onPress={() => multiSelect(item)}>
                            {getSelected(item) ?<Image  style={styles.on}
             source={require('../../../assets/images/done1.png')}/>  : item.status ? <Image style={styles.on}
             source={require('../../../assets/images/on_switch_large.png')}/> : <Image  style={styles.on}
             source={require('../../../assets/images/off_switch_large.png')} />}

                        </TouchableOpacity>

                        {
                            !getSelected(item) &&
                            <TouchableOpacity
                                onPress={() => {
                                    setEdit(item.switchName)
                                    setToggle(item.isToggle)
                                    setSelectedPos(index)
                                    setKeyboardStatus(true);
                                    SheetManager.show("name_sheet")
                                }}>
                                <MaterialIcons name={"edit"} size={20} color={'#0A56A2'} />
                            </TouchableOpacity>
                        }
            
                </View>
                <Text style={{color: '#212121',
        fontSize: 16}} text={item.switchName} />
        <View style={{ flexDirection: 'row', alignItems: 'center',marginTop:'-11%' }}>
    <Image  style={styles.on1}
             source={require('../../../assets/images/switch_type.png')}/>
    <Text style={{color: '#111111',
        fontSize: 12,
        marginTop: '13%',
        marginStart: 4}} text={item.isToggle ? 'Toggle Switch' : 'Normal Switch'} />
</View>
<View style={{ ...styles.view, width: '106%', marginVertical:'11%',marginBottom:0}}>
    <Text style={{color:'#212121',
        fontSize: 16,}} text={item.status ? 'On' : 'Off'} />
    <Switch
        trackColor={{ false: '#DEDFE1', true: '#77C146' }}
        thumbColor={'#FFFFFF'}
        ios_backgroundColor={'#DEDFE1'}
        onValueChange={(value) => {
            
            switching(index, value)
        }}
        value={item.status}
    />
</View>
            </TouchableOpacity>
    )
    }
    return (
      <View testID="manageroomscreen" style={FULL}>
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
         <Text style={styles.text}>{selectitems.length === 0 ? roomName : selectitems.length + ' Selected'} </Text>
         <TouchableOpacity
                                style={{ width: '20%', 
                                marginVertical: '8%',
                                marginHorizontal:'80%'}}
                                onPress={() => {SheetManager.show("device_sheet")}}>
                               <MaterialIcons name={"edit"} size={20} color={'white'} />
                              
                            </TouchableOpacity>
                    
                            <TouchableOpacity
                                style={{ width: '20%',
                                // alignItems: 'center',
                                borderRadius: 6,
                                paddingHorizontal: '-12%',
                                paddingVertical: '-25%',
                                marginVertical:'-13%',
                                marginHorizontal:'90%'
                            }}
                                onPress={() => {}}>
                                <MaterialIcons name="delete-outline" color={'#FFFFFF'} size={24}/>   
                            </TouchableOpacity>
                            <View style={{}}>
                            <Text
                            style={styles.text1}
                            text="Long press on each switch to select" /></View>
            <ActionSheet
            id="device_sheet"
            initialOffsetFromBottom={1}
            gestureEnabled={true}
            extraScroll={10}
            containerStyle={styles.container}
            headerAlwaysVisible={true}
            onClose={() => {
                            setKeyboardStatus(false)
                        }}
          >
             <View style={styles.viewa} >
            <TextInput
              style={styles.textinput2}
             placeholder={device}
              keyboardType="default"
              editable={true}
             onChangeText={(txt) => {
                setRoomName(txt)
            }}
            value={roomName}
            // onSubmitEditing={() => {
            //     setRoomName(roomName)
            //     Keyboard.dismiss
            //     SheetManager.hideAll()
            // }}
             
            />
           
        </View>
        </ActionSheet>
        <ActionSheet
            id="name_sheet"
            initialOffsetFromBottom={1}
            gestureEnabled={true}
            extraScroll={10}
            containerStyle={styles.container}
            headerAlwaysVisible={true}
          >
             <View style={styles.viewa} >
            <TextInput
              style={styles.textinput2}
             placeholder={place}
            //   keyboardType="default"
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
              value={switchList[selectedPos].isToggle}
            />
            <Button activeOpacity={0.2} onPress={() => updateSwitch()} 
            style={styles.btn1}>
          <Text style={styles.btntxt1}>Update</Text>
        </Button>
        </View>
          </ActionSheet>
        <View>
                        <FlatList
                            data={switchList}
                            keyExtractor={(item, index) => index + ''}
                            numColumns={2}
                            renderItem={({ item, index }) => roomRender(item, index)}
                            style={styles.flatlist}
                        />
        </View>
        {
                        selectitems.length != 0 && tabPos == 0 &&
                        <View style={{flex: windowsHeight > 800 ? 0.10 : 0.35,
                        flexDirection: 'row',
                        backgroundColor: '#77C146',
                        margin: 15,
                        marginVertical:'10%',
                        borderRadius: 8,
                        alignItems: 'center',
                        justifyContent: 'space-around',}}>
                            <Text
                                style={{color: '#FFFFFF',
                                   fontSize: 12,
                                    padding: 4}}
                                text="Change Room"
                                onPress={() => {
                                    setSelectitems([])
                                    selectroom()
                                }} />

                            <View style={{ backgroundColor: '#FFFFFF', width: 1, height: windowsHeight * 0.04 }} />

                            <Text
                                style={{color: '#FFFFFF',
                                fontSize: 12,
                                 padding: 4}}
                                text="Unlink from Room"
                                onPress={() => {

                                }} />
                        </View>
                    }
      </View>

    )

  },
)


