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
    text: {
        width: '50%',
        height: 23,
        marginHorizontal: 60,
        marginVertical: -55,
        color: '#FFFFFF',
        fontSize: 16,
      },
      text1:{
        fontSize: 14,
        color: '#757575',
        marginHorizontal: 16,
        marginVertical: '-23%'
      },
    flatlistContainer: {
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
    },
    unselectedstyle:{
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        padding: 10,
        borderRadius: 12,
        borderColor: "#E2E2E2",
        borderWidth: 1,
    },
    selectedstyle:{
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#0A56A2',
        padding: 10,
        borderRadius: 12,
    },
    unTextStyle:{
        fontSize: 14,
        color: '#212121'
    },
    animation: {
        width: '90%',
        height: '90%',
        marginHorizontal: '5%',
        marginVertical: '10%'
      },
    sTextStyle : {
        fontSize: 14,
        color: '#FFFFFF'
    },
    done: {
        borderRadius: 18,
        backgroundColor: '#77C146',
        padding: 6
    },
    offSwitch: {
        borderRadius: 6,
        backgroundColor: '#DFDFDF',
        padding: 6
    },
    onSwitch: {
        borderRadius: 6,
        backgroundColor: '#77C146',
        padding: 6,
    },
    on:{
        width:24,
        height:24
    },
    container: {
        height: 200,
      },
      on1:{
        width:16,
        height:16
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
      text2: {
        color: '#666666',
        marginHorizontal: '5%',
        marginVertical: '-1%'
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
})

export const SwitchScreen: FC<StackScreenProps<NavigatorParamList, "switchscreen">> = observer(
  ({ navigation, route }) => {
    const selectroom = () => navigation.navigate("selectroom", 'Change Room')


    const goBack = () => navigation.goBack()
    const [selectitems, setSelectitems] = useState([]);
    const [title, setTitle] = useState('');
    const [Alert, setAlert] = useState(false);
    const [tabPos, setTabPos] = useState(0);
    const [toggle, setToggle] = useState(false);
    const [selectedPos, setSelectedPos] = useState(0);
    const [edit, setEdit] = useState('');
    const [keyboardStatus, setKeyboardStatus] = useState(false);
    const[place,setPlace]=useState('Switch Name');
    const[device,setDevice]=useState('Device Name');
    const [isEnabled, setIsEnabled] = useState(false);
    const [itempos, setItempos] = useState(0);
  
    // useEffect(() => {
    //     setTitle(route.params.deviceName)
    // }, [])
    const multiSelect = (item) => {
        if (selectitems.includes(item.id)) {
            const newlistitem = selectitems.filter(itemId => itemId != item.id)
            return setSelectitems(newlistitem)
        }
        setSelectitems([...selectitems, item.id])
    }

    const getSelected = (item) => selectitems.includes(item.id)

    const addToRoom = () => {
        let list = []
        for (let id in selectitems) {
            // list.push(switchList.filter(item => item.id == selectedItems[id]))
        }
    }
   
     
   
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
        <Text style={styles.text}>{selectitems.length === 0 ? title : selectitems.length + ' Selected'} </Text>
                       
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
                       
    
        <View style={{ flexDirection: 'row',
        width: windowsWidth,
        marginVertical:'25%',
        margin: 16,}}>
                        <TouchableOpacity style={tabPos != 0 ? styles.unselectedstyle : styles.selectedstyle}
                            onPress={() => {
                                setTabPos(0)
                                setSelectitems([])
                            }}>
                            <MaterialIcons name='link' color={tabPos != 0 ? '#5F6368' : '#FFFFFF'} size={16} />
                            <Text text=" Linked" style={tabPos != 0 ? styles.unTextStyle : styles.sTextStyle} />
                        </TouchableOpacity>

                        <View style={{ marginStart: 20 }}>
                            <TouchableOpacity style={tabPos != 0 ? styles.selectedstyle : styles.unselectedstyle}
                                onPress={() => {
                                    setTabPos(1)
                                    setSelectitems([])
                                }}>
                                <MaterialIcons name='link-off' color={tabPos != 0 ? '#FFFFFF' : '#5F6368'} size={16} />
                                <Text text=" Not Linked" style={tabPos != 0 ? styles.sTextStyle : styles.unTextStyle} />
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={{ flex: 1, }}>
                        <Text
                            style={styles.text1}
                            text="Long press on each switch to select" />
                             <LottieView
            source={require('../../../assets/images/switch.json')}
            autoPlay={true}
            //autoSize={true}
            style={styles.animation}
          />
             <Text text="No Switch" style={{color:'#2A2A2A',fontSize:14,fontWeight:'900',textAlign:'center',marginVertical:'-16%'}}/>
       <Text text="You do not have a switch to link." style={{color:'#757575',fontSize:12,textAlign:'center',marginVertical:'18%'}}/>
     
                    </View>
                    {
                        selectitems.length != 0 && tabPos == 0 &&
                        <View style={{flex: windowsHeight > 800 ? 0.08 : 0.10,
                        flexDirection: 'row',
                        backgroundColor: '#77C146',
                        margin: 16,
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
                    {

                selectitems.length != 0 && tabPos == 1 &&
<View style={{flex: windowsHeight > 800 ? 0.08 : 0.10,
                        flexDirection: 'row',
                        backgroundColor: '#77C146',
                        margin: 16,
                        borderRadius: 8,
                        alignItems: 'center',
                        justifyContent: 'space-around',}}>
    <Text
        style={{color: '#FFFFFF',
        fontSize: 12,
         padding: 4}}
        text="Add to a Room"
        onPress={() => {
            setSelectitems([])
            selectroom()
        }} />
</View>
}
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
                setTitle(txt)
            }}
            value={title}
            onSubmitEditing={() => {
                setTitle(title)
                Keyboard.dismiss
                SheetManager.hideAll()
            }}
             
            />
           
        </View>
          </ActionSheet>
       
      </View>

    )

  },
)


