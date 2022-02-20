import React from 'react';
import {NavigationContainer} from "@react-navigation/native"
import {createNativeStackNavigator} from "@react-navigation/native-stack"
import Home from '../screens/Home';
import MyCart from '../screens/MyCart';
import ProductInfo from '../screens/ProductInfo';
import Payment from '../screens/Payment';
import Succsess from '../screens/Succsess';
import Football from '../screens/Football';
import Basketball from '../screens/Basketball';
import Running from '../screens/Running';
import Soccer from '../screens/Soccer';
import LifeStyle from '../screens/LifeStyle';
import Jordan from '../screens/Jordan';



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
        <Stack.Screen name="Football" component={Football}/>
        <Stack.Screen name="Basketball" component={Basketball}/>
        <Stack.Screen name="Running" component={Running}/>
        <Stack.Screen name="Soccer" component={Soccer}/>
        <Stack.Screen name="LifeStyle" component={LifeStyle}/>
        <Stack.Screen name="Jordan" component={Jordan}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
 }



