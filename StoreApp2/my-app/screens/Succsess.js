import React from 'react';
import { Text,TouchableOpacity,View} from 'react-native';
import { ImageBackground } from 'react-native';
import bgImage2 from '../assets/images/bgImage2.jpg';
import styles from '../assets/Style';

const Succsess = ({navigation}) =>{

  return (
    <ImageBackground source={bgImage2} style={{
      flex:1,
      justifyContent:'center',
      alignItems:'center',
    }}>
    <View>
            <Text style={{
              fontSize:18,
              justifyContent:'center',
              fontFamily:'DancingScript-Regular',  
            }}>
            Fun, payment passed successfully,
            {'\n'}renew!!
            </Text>
            <Text></Text>
            <Text></Text>
            <View>
            <TouchableOpacity 
            onPress={() => navigation.navigate('Home')}>
                <Text>
                    Back to Shopping 
                </Text>
            </TouchableOpacity>
            </View>
    </View>
    </ImageBackground>
  );
}

export default Succsess;
