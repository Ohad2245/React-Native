// מאפשר לעבור בין מסכים
import React,{useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import GameBoardScreen from './screens/GameBoardScreen';
import Header from './components/Header';
import StartGameScreen from './screens/StartGameScreen';
import * as Font from "expo-font";
// אחראי על לטעון את הפונטים ואז להריץ את האפליקצייה
import AppLoading from 'expo-app-loading';

// function outside the App component:
const fetchFonts = () =>{
  // pass an object with all the fonts:
  // loadAsync returns apromise -> take a little longer

  Font.loadAsync({
    // font-name(we use) : path to the font
    "reggae-one":require("./assets/fonts/ReggaeOne-Regular.ttf"),
  });
};

export default function App() {
  const [startGame,setstartGame] = useState(false);
  const[dataLoaded,setDataLoaded] = useState(false);

  if(!dataLoaded){
    return(
      <AppLoading
      startAsync={fetchFonts}
      onFinish={()=> setDataLoaded(true)} // כאשר סיימת לטעון את הפונטים בעצמך , אני רוצה שתשנה לי לטרו
      onError={err => console.log(err)} // כשיהיה לי אמת אני אצא מהאותו תנאי
      />
    );
  };
  
// כאשר הוא אמת הוא יעבור בין הדפים
  let startGameHandler = () =>{
    setstartGame(true);
  };
  // Default content for page:
  let content = <StartGameScreen onStartGame={startGameHandler}/>;

  if (startGame)content = <GameBoardScreen/>;
  return (
    <View style={styles.container}>
      <Header myHeader="Tic tac toe"/>
      {content} 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
