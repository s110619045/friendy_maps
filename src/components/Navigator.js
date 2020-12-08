import { StatusBar } from 'expo-status-bar';
import { preventAutoHide } from 'expo/build/launch/SplashScreen';
import Expo from 'expo';
import React from 'react';
import { StyleSheet, Text, Image, View, TextInput, Button, ScrollView, TouchableOpacity} from 'react-native';
import elementData from "../json/element.json";

const Navigator = () =>{
    return(
        <View style={styles.navbar}>
            <TouchableOpacity 
            style={styles.btn_navbar}
            onPress={() => navigation.navigate('MapScreen', name)}
            >
            <Image style={styles.navbarimg}></Image>
            <Text>地圖</Text>
            </TouchableOpacity>

            <TouchableOpacity 
            style={styles.btn_navbar}
            onPress={() => navigation.navigate('ContributeScreen', name)}
            >
                <Image style={styles.navbarimg}></Image>
                <Text>安全回報</Text>
            </TouchableOpacity>

            <TouchableOpacity 
            style={styles.btn_navbar}
            onPress={() => navigation.navigate('PersonalScreen', name)}
            >
                <Image style={styles.navbarimg}></Image>
                <Text>個人</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    navbar:{
        flexDirection: 'row',
    
      },
    
      navbarimg:{
        height: 30,
        width: 30,
        backgroundColor: 'pink',
        marginBottom: 5,
      },
    
      btn_navbar:{
        alignItems: "center",
        backgroundColor: "#DDDDDD",
        paddingVertical: 15,
        flex: 1,
      }
});

export default Navigator;