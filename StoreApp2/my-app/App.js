import React from 'react';
import {createNativeStackNavigator} from "@react-navigation/native-stack"
import AppNavigator from "./navigation/AppNavigator";

const App = () =>{
 const Stack = createNativeStackNavigator();

  return (
    <AppNavigator/>
  );
}

export default App;
