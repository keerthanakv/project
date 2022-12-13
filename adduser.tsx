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
        marginVertical:'5%'
      },
      btn: {
        width: '90%',
        height: 36,
        marginHorizontal: '5%',
        marginVertical: '32%',
        backgroundColor: '#77C146',
        borderRadius: 6
      },
      btntxt: {
        width: '17%',
        height: 20,
        marginHorizontal: '20%',
        marginVertical: 10,
      },

})

export const AddUserScreen: FC<StackScreenProps<NavigatorParamList, "adduserscreen">> = observer(
  ({ navigation, route }) => {
    let nextScreen = () => navigation.navigate("configurec")
    const goBack = () => navigation.goBack()
    const [passwordVisible, setPasswordVisible] = useState(true);
    const [password,setPassword]=useState(null);
    const [wifi,setWifi]=useState(null);
    const [disabled,setDisabled]=useState(false);
   

    return (
      <View testID="adduserscreen" style={FULL}>
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
        <Text style={styles.text}>Add User</Text>
        <TextInput
        style={{width: '90%',height: 46,marginHorizontal: 16,marginVertical: '35%',borderColor: '#E0E0E0',borderRadius: 6,borderWidth: 2}}
        placeholder={'FullName'}
        />
         <TextInput
        style={{width: '90%',height: 46,marginHorizontal: 16,marginVertical: '-30%',borderColor: '#E0E0E0',borderRadius: 6,borderWidth: 2 }}
        placeholder={'Email'}
        keyboardType="email-address"
        />
         <TextInput
        style={{width: '90%',height: 46,marginHorizontal: 16,marginVertical: '35%',borderColor: '#E0E0E0',borderRadius: 6,borderWidth: 2}}
        placeholder={'Phone Number'}
        keyboardType="numeric"
        />

<Button activeOpacity={0.2}onPress={() => {
                                   
                                      
                                  }} style={styles.btn}>
                                    <Text style={styles.btntxt}>Invite</Text>
                                  </Button>

         
      

      </View>

    )

  },
)
