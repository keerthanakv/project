import React, { FC, useEffect, useState } from "react"
import { View, ViewStyle, TextStyle, ImageStyle, SafeAreaView, StyleSheet, Image, TouchableOpacity, StatusBar, FlatList, Switch } from "react-native"
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
    marginHorizontal:3,
    marginVertical:'10%',
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
    width: 150,
    height: 30,
    marginHorizontal: '45%',
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
  width: '90%',
  height: 46,
  marginHorizontal: 16,
  marginVertical: '20%',
  borderColor: '#E0E0E0',
  borderRadius: 6,
  borderWidth: 2
},
switch: {
    width: 48,
    height: 24,
    marginHorizontal: '85%',
    marginVertical: '-32%'
  },
  t1: {
    width: '39%',
    borderRadius: 15,
    backgroundColor: '#FFFFFF',
    borderColor: '#E2E2E2',
    marginEnd: 16,
    marginBottom: 16,
    borderWidth: 2,
    padding: 5,
    height: '70%',
    marginHorizontal: '5%',
    marginVertical:'10%'
  },
  offSwitchViewStyle1: {
 
    borderRadius: 6,
    backgroundColor: '#DFDFDF',
    width:'25%',
    height:'25%',
    marginHorizontal:'8%',
    marginVertical:'8%'
  
  },
  images1:{
    width:24,
    height:24,
    marginHorizontal:3,
    marginVertical:'10%',
  
  },
  fl: {
    color: '#111111',
    width: '80%',
    height: 60,
    marginHorizontal: '5%',
    marginVertical: '5%'
  },
  offSwitchViewStyle: {
    borderRadius: 10,
    backgroundColor: '#DFDFDF',
    
},
textt: {
    color: '#111111',
    width: 100,
    height: 17,
    fontSize: 14,
    marginHorizontal: '5%',
    marginVertical: '-17%'
  },
  switch2: {
    width: 48,
    height: 24,
    marginHorizontal: '60%',
    marginVertical: '5%'
  },
  flatlist:{
    height:'100%',
    width:'100%',
    marginVertical:'35%'
  },
  imager:{
    width:16,
    height:16,
    marginHorizontal:'24%',
    marginVertical:'15%'
  },
  text3:{
    width:'30%',
      height: 23,
      marginHorizontal: '28%',
      marginVertical:'-19%',
      color: '#111111',
      fontSize: 12,
  },
  imager1:{
    width:16,
    height:16,
    marginHorizontal:'45%',
    marginVertical:'14%'
  },
  text4:{
    width:'30%',
      height: 23,
      marginHorizontal: '50%',
      marginVertical:'-18%',
      color: '#111111',
      fontSize: 12,
  },
  sub:{
    marginVertical:70,
    marginHorizontal:-2,
  },
  sub1:{
    marginVertical:-70,
    marginHorizontal:10,
  }
})

export const SwitchcontrolScreen: FC<StackScreenProps<NavigatorParamList, "switchcontrol">> = observer(
  ({ navigation }) => {
    let nextScreen = () => navigation.replace("demo")
    const goBack = () => navigation.goBack()
   
    const [isSwitchcontrol, SetIsSwitchcontrol] = useState(false)
    const [selectedItems, setSelectedItem] = useState([])
    const [selectitems, setSelectitems] = useState([])
    const [switchList, setSwitchList] = useState([
        {
            id: 1,
            switchName: "Switch 1",
            status: false,
        },
        {
          id: 2,
          switchName: "Switch 2",
          status: false,
      },
        

    ])
    const switching = (index, value) => {
        const tempArray = [...switchList]
        tempArray[index].status = value
        setSwitchList(tempArray)
    }
  
      const getSelected = (item) => selectitems.includes(item.id)
      const renderItem = ({ item, index }) => {     
   
         return (
   
           <TouchableOpacity
             activeOpacity={0.3}
             style={{ ...styles.t1, borderColor: getSelected(item) ? '#77C146' : '#E2E2E2' }}>
               <View style={{
                            ...styles.offSwitchViewStyle1,
                            backgroundColor: item.status ?
                            '#77C146' :'#DFDFDF'
                        }}>
              {item.status ?  
                          <Image
                          style={styles.images1} 
                          source={require('../../../assets/images/on_switch_large.png')}/> :   
                          <Image
                          style={styles.images}
                          source={require('../../../assets/images/off_switch_large.png')}/>}
             </View>
             <Text style={styles.fl}>{item.switchName}</Text>
             
                         
                          
             <View>        
             <Text style={styles.textt}>{item.status ? 'On' : 'Off'}</Text>
             <Switch
                style={styles.switch2}
                trackColor={{ false: "#DEDFE1", true: "#77C146" }}
                thumbColor={ "#FFFFFF"}
                ios_backgroundColor={"#DEDFE1"}
                onValueChange={(value) => switching(index, value)}
                value={item.status}
              />
             </View>
            
           
           </TouchableOpacity>
           );
          };
      
    
    return (
      <View testID="SwitchcontrolScreen" style={FULL}>
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
        <Text style={styles.text}>Living Room</Text>
        <View style={styles.viewt}>
          <Text style={styles.main}>Switches Control</Text>
        </View>
        <Switch
              style={styles.switch}
              trackColor={{ false: "#DEDFE1", true: "#77C146" }}
              thumbColor={"#FFFFFF"}
              onValueChange={(value) => {
                for (let index = 0; index < switchList.length; index++) {
                    const tempArray = [...switchList]
                    tempArray[index].status = value
                    setSwitchList(tempArray)
                }
                SetIsSwitchcontrol(value)
            }}
            value={isSwitchcontrol}
            />
        {/* */}
        {/* <View style={styles.sub}>
            <Image
      style={styles.imager}
       source={require('../../../assets/images/on_switch_small.png')}/>
        <Text style={styles.text3}>1 Switches</Text>
        </View>
        <View style={styles.sub1}>
        <Image
      style={styles.imager1}
       source={require('../../../assets/images/off_switch_large.png')}/>
        <Text style={styles.text4}>1 Switches</Text>
        </View> */}
        {/* </View> */}
            <FlatList
            style={styles.flatlist}
            data={switchList}
            renderItem={renderItem}
            numColumns={2}
          />
      </View>
    )
  },
)
