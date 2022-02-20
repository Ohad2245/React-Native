import React from 'react';
import {
    Text,
     View , 
     TouchableOpacity , Image,} from 'react-native';
import { COLORS } from '../assets/Style';
import styles from '../assets/Style';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import football from '../assets/images/Football/alpha-menace/alpha-menace-1.jpg';
import jordan from '../assets/images/Jordan/air-jordan/air-jordan-1.jpg';
import lifestyle from '../assets/images/LifeStyle/air-force-1/air-force-1-1.jpg';
import running from '../assets/images/Running/air-zoom-alphafly/air-zoom-alphafly-1.jpg';
import basketball from '../assets/images/Basketball/air-zoom/air-zoom-1.jpg';
import soccer from '../assets/images/Soccer/gt2-elite/gt2-elite-1.jpg';
import { ScrollView } from 'react-native';
import { ImageBackground } from 'react-native';
import backgroundNike from '../assets/images/backgroundNike.jpg';

const Home = ({navigation}) =>{
    return(
        <ScrollView>
            
        <View source={backgroundNike} style={styles.backGround}>
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
                             fontWeight:'200',
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
                        <View>
                        </View>
        <View style={{
            flex:1,
            flexDirection:'row',
            flexWrap:'wrap',
        }}>
            <TouchableOpacity onPress={() => navigation.navigate('Football',)}>
                <Text style={styles.categories}>Footaball</Text>
                <Image source={football} resizeMode='contain' style={{
                    height:250,
                    width:180,
                    left:170,
                }}/>
            
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Basketball',)}>
            <Text style={styles.categories}>Basketball</Text>
            <Image source={basketball} resizeMode='contain' style={styles.image}/>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('Jordan',)}>
            <Text style={styles.categories}>Jordan</Text>
            <Image source={jordan} resizeMode='contain' style={{
                height:250,
                width:180,
                left:170,
            }}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('LifeStyle',)}>
            <Text style={styles.categories}>LifyStyle</Text>
            <Image source={lifestyle} resizeMode='contain' style={styles.image}/>
            </TouchableOpacity >

            <TouchableOpacity onPress={() => navigation.navigate('Running',)}>
            <Text style={styles.categories}>Running</Text>
            <Image source={running} resizeMode='contain' style={{
                height:250,
                width:180,
                left:170,
            }}/>
                
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('Soccer',)}>
            <Text style={styles.categories}>Soccer</Text>
            <Image source={soccer} resizeMode='contain' style={styles.image}/>
            </TouchableOpacity>
        </View>
        </View> 
        </View>
        </ScrollView>
    )
};
export default Home;