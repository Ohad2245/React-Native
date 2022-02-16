import React from 'react';
import {NavigationContainer} from "@react-navigation/native"
import {createNativeStackNavigator} from "@react-navigation/native-stack"
import Home from '../screens/Home';
import MyCart from '../screens/MyCart';
import ProductInfo from '../screens/ProductInfo';
import Payment from '../screens/Payment';
import Succsess from '../screens/Succsess';

 const Stack = createNativeStackNavigator();
 export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="MyCart" component={MyCart}/>
        <Stack.Screen name="ProductInfo" component={ProductInfo}/>
        <Stack.Screen name="Payment" component={Payment}/>
        <Stack.Screen name="Succsess" component={Succsess}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
 }



