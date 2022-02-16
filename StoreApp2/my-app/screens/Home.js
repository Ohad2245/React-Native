import React, { useEffect, useState } from 'react';
import {
    Text,
     View , 
     StatusBar,
     ScrollView,
     TouchableOpacity , Image ,ImageBackground,FlatList} from 'react-native';
import { Items} from '../database/Database';
import { COLORS } from '../assets/Style';
import styles from '../assets/Style';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import lifestyle from '../assets/images/lifestyle.jpg';
import nike from '../assets/images/nike2.png';
import { ActivityIndicator } from 'react-native';



const Home = ({navigation}) =>{
    return(
    
             <View style={{
                        marginBottom:10,
                        padding:16,
                    }}>
                    <TouchableOpacity onPress={()=> navigation.navigate('MyCart')}>
                        <MaterialCommunityIcons
                            name= "cart"
                            style={{
                                fontSize:30,
                                color:COLORS.backgroundMedium,
                                padding:1,
                                borderRadius:10,
                                borderWidth:2,
                                borderColor:COLORS.backgrondLight,
                                position:'absolute',
                                left:320,
                            }}
                        />    
                    </TouchableOpacity>
                        <Text
                         style={{
                             fontSize:26,
                             color:"black",
                             fontWeight:'300',
                             letterSpacing:7,
                             marginBottom:10,
                             fontFamily:'DancingScript-Regular',
                         }}>
                         Welcome to Nike Store 
                        </Text>
                        <Text
                         style={{
                             fontSize:14,
                             color:COLORS.black,
                             fontWeight:'100',
                             letterSpacing:3,
                             marginBottom:10,
                             lineHeight:24,
                             fontFamily:'DancingScript-Regular',
                         }}>
                        Store brands of David Shoval and Ohad
                        {'\n'}This shop offers both products and services
                        </Text>
        <View style={{
            marginTop:30,
            marginBottom:30,
            flexDirection:'row',
            justifyContent:'space-between',
        }}>
            
            <TouchableOpacity onPress={() => navigation.navigate('Football',)}>
                <Text style={styles.categories}>Footaball</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Basketball',)}>
                <Text style={styles.categories}>Basketball</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Jordan',)}>
                <Text style={styles.categories}>Jordan</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('LifeStyle',)}>
                <Text style={styles.categories}>LifyStyle</Text>
            </TouchableOpacity >
            <TouchableOpacity onPress={() => navigation.navigate('Running',)}>
                <Text style={styles.categories}>Running</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Soccer',)}>
                <Text style={styles.categories}>Soccer</Text>
            </TouchableOpacity>
        </View>
        </View> 
    )
    
};

export default Home;