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
    text: {
        width: '50%',
        height: 23,
        marginHorizontal: 60,
        marginVertical: -50,
        color: '#FFFFFF',
        fontSize: 16,
      },
      imagea:{
        width:24,
        height:24,
        marginHorizontal:'20%',
        marginVertical:'10%'
      },
      touchableopacity:{
        backgroundColor:'#77C146',
        width:40,
        height:30,
        borderRadius:6,
        marginHorizontal:'85%',
        marginVertical:'6%'
      },
      view:{
        width:'90%',
        marginTop: 16
      },
      flatlistStyle:{
        width:'100%',
        height:'100%'
      },
      view1:{
        width:'70%',
        backgroundColor: '#FFFFFF',
        paddingVertical: 1,
        flexDirection: 'row',
        alignItems: 'center',
      }

})

export const ManageUserScreen: FC<StackScreenProps<NavigatorParamList, "manageuserscreen">> = observer(
  ({ navigation, route }) => {
    let nextScreen = () => navigation.navigate("configurec")
    const goBack = () => navigation.goBack()
    const [list,setList]=useState([
      {
        id:1,
        name:"You",
        mail:"john@gmail.com"
      },
      {
        id:2,
        name:"Addison",
        mail:"Addison@gmail.com"
      },
      {
        id:3,
        name:"Dinkan",
        mail:"Dinkan@gmail.com"
      }
    ])
    const [selectitems, setSelecteitem] = useState([])

    const userdelete = (index) => {
      const tempArray = [...list]
      tempArray.splice(index, 1)
      setList(tempArray)
  }
   const renderList=(item,index)=>{
    return(
    <View style={styles.view1}>
      <TouchableOpacity style={{  width: '-10%',
    height: 50,
    marginHorizontal: 14,
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'flex-start'}}>
        <Image source={require('../../../assets/images/user_small.png')}style={{ height: 30,
    width: 30, marginHorizontal:'20%',marginRight:-40}}/>
        </TouchableOpacity>
        <View style={{ marginStart: -15,width:'90%' }}>
      <Text style={{color:'#212121',width:'100%',}}>{item.name}</Text>
      <Text style={{color:'#757575',width:150,}}>{item.mail}</Text>
      </View>
      {
                        index != 0 &&
                        <TouchableOpacity 
                            onPress={() => {
                                userdelete(index)
                            }}>
                            <Image source={require('../../../assets/images/delete.png')} style={{height:25,width:25,marginLeft:30}}/>
                        </TouchableOpacity>
                    }
    </View>
    )
   }
    return (
      <View testID="manageuserscreen" style={FULL}>
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
        <Text style={styles.text}>Manage Users</Text>
        <TouchableOpacity activeOpacity={0.1} style={styles.touchableopacity} onPress={() => navigation.navigate('adduserscreen')}>
        <Image
      style={styles.imagea}
       source={require('../../../assets/images/add.png')}/></TouchableOpacity>
        
        <View style={styles.view}>

<FlatList
    data={list}
    keyExtractor={(item, index) => index + ''}
    renderItem={({ item, index }) =>renderList(item,index)}
    style={styles.flatlistStyle}
/>
</View>
        

         
      

      </View>

    )

  },
)
