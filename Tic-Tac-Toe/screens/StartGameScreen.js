// החלון הראשון של האפליקצייה
import React,{useState} from "react";
import { StyleSheet, Text, Touchable, TouchableOpacity, View , Image} from 'react-native';
import styles from '../assets/style'

export default function StartGameScreen(props) {
  return (
    <View style={styles.container}>

    <View style={styles.imgContainer}>
      <Image source={require('../assets/start2.jpg')} style ={styles.img}/>
    </View>

        <TouchableOpacity
         onPress={() => props.onStartGame()}
        style={styles.myButton}>
            <Text style={styles.familyTxt}> Start a new Game</Text>
        </TouchableOpacity>
    </View>
  );
}


