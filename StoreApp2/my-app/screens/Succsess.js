import React from 'react';
import { Text,TouchableOpacity,View,style } from 'react-native';
const Succsess = () =>{

  return (
    <View>
            <Text style={{
              
            }}>
            Fun, payment passed successfully,
            {'\n'}renew!!
            </Text>
            <View>
            <TouchableOpacity 
            onPress={() => navigation.navigate('Home',)}>
                <Text>
                    Back to Shopping 
                </Text>
            </TouchableOpacity>
            </View>
            

    </View>
  );
}

export default Succsess;
