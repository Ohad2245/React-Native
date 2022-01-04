import React, { useState } from "react";
// 1. Import Text
import { Alert, StyleSheet, TouchableOpacity, View, Text } from "react-native";
import { MaterialCommunityIcons as Icon } from "react-native-vector-icons";

// Import the stylesheet:
import styles from '../assets/style'

export default function GameBoardScreen() {
  const [GameBoard, setGameBoard] = useState([[0, 0, 0],[0, 0, 0],[0, 0, 0]]);
  const [currPlayer, setCurrPlayer] = useState(1);
  const [isWinner, setIsWinner] = useState(false);
  // can get: 1-8
  const [rowWin, setRowWin] = useState(0);
  // Define bariables (JSON) to count victories
  // מגדיר לי כגייסון את הניקוד של איקס ועיגול
  const [points,setPoints] = useState({x:0 ,o:0});

  // function to reset the game:
  let restartGame = () => {
    // update matrix:
    setGameBoard([[0, 0, 0],[0, 0, 0],[0, 0, 0]]);
    // update player:
    setCurrPlayer(1);
    // update game state - victory/not
    setIsWinner(false);
    setRowWin(0);
  }

  let renderIcon = (row, column) => {
    let value = GameBoard[row][column];
    switch (value) {
      case 1:
        return <Icon name="close" style={styles.theX} />;
      case -1:
        return <Icon name="circle-outline" style={styles.theO} />;
      default:
        return <View></View>;
    }
  };

  // onPress: 1. update matrix, Show X/O, update currPlayer, check for winner.
  let onSquarePress = (row, col) =>{

    // 3. If we have a winner - stop inserting data
    if(isWinner) return;
    if(GameBoard[row][col] != 0) return;

    setGameBoard([...GameBoard, (GameBoard[row][col] = currPlayer)]);
    setCurrPlayer(currPlayer === 1 ? -1 : 1);

    // const [points,setPoints] = useState({x:0,o:0});
    let winner = checkWinner(); // return 0, 1, -1
    if(winner === 1) {
      setPoints({...points, x:points.x +1})
    }
    else if(winner === -1){
      setPoints({...points, o:points.o +1})
    }

    // 2. update the state when there is a victory:
    if(winner != 0) setIsWinner(true);
  }

  let checkWinner = () => {
    let sum;
    // Rows:
    for (let row = 0; row < GameBoard.length; row++) {
      sum = GameBoard[row][0] + GameBoard[row][1] + GameBoard[row][2];
      if(sum === 3 || sum === -3) 
        setRowWin(row === 0 ? 1 : row === 1? 2 : 3);
      if(sum === 3) return 1; // X won
      else if (sum === -3) return -1; // O won
    }
    // Columns:
    for (let row = 0; row < GameBoard.length; row++) {
      sum = GameBoard[0][row] + GameBoard[1][row] + GameBoard[2][row];
      if(sum === 3 || sum === -3) 
        setRowWin(row === 0 ? 4 : row === 1? 5 : 6);
      if(sum === 3) return 1; // X won
      else if (sum === -3) return -1; // O won
    }

    // main diagonal:
    sum = GameBoard[0][0] + GameBoard[1][1] + GameBoard[2][2];
    if(sum === 3 || sum === -3) setRowWin(7);
    if(sum === 3) return 1; // X won
    else if (sum === -3) return -1; // O won

    // secondary diagonal:
    sum = GameBoard[0][2] + GameBoard[1][1] + GameBoard[2][0];
    if(sum === 3 || sum === -3) setRowWin(8);
    if(sum === 3) return 1; // X won
    else if (sum === -3) return -1; // O won

    // If there is no winner:
    return 0;
  }
  // פה תמיד נכתוב את התצוגה שלנו
  return (
    <View style={styles.container}>
      <View style ={styles.score}>
        <Text style={styles.familyTxt}>SCORE: X = {points.x} , O = {points.o}</Text>
      </View>
      <View style={{ flexDirection: "row" }}>
        <TouchableOpacity onPress={() => onSquarePress(0,0)}
          style={[styles.square, { borderTopWidth: 0, borderLeftWidth: 0 },
          (rowWin === 1 || rowWin === 4 || rowWin === 7) ? styles.winSquare : ""]}>
          {renderIcon(0, 0)}
        </TouchableOpacity>
        <TouchableOpacity onPress={() => onSquarePress(0,1)} 
        style={[styles.square, { borderTopWidth: 0 },
          (rowWin === 1 || rowWin === 5) ? styles.winSquare : ""]}>
          {renderIcon(0, 1)}
        </TouchableOpacity>
        <TouchableOpacity onPress={() => onSquarePress(0,2)}
          style={[styles.square, { borderTopWidth: 0, borderRightWidth: 0 },
            (rowWin === 1 || rowWin === 6 || rowWin === 8) ? styles.winSquare : ""]}>
          {renderIcon(0, 2)}
        </TouchableOpacity>
      </View>

      <View style={{ flexDirection: "row" }}>
        <TouchableOpacity onPress={() => onSquarePress(1,0)} 
        style={[styles.square, { borderLeftWidth: 0 },
          (rowWin === 2 || rowWin === 4) ? styles.winSquare : ""]}>
          {renderIcon(1, 0)}
        </TouchableOpacity>
        <TouchableOpacity onPress={() => onSquarePress(1,1)} 
        style={[styles.square, 
        (rowWin === 2 || rowWin === 5 || rowWin === 7 || rowWin === 8) ? styles.winSquare : ""]}>
          {renderIcon(1, 1)}
        </TouchableOpacity>
        <TouchableOpacity onPress={() => onSquarePress(1,2)} 
        style={[styles.square, { borderRightWidth: 0 },
          (rowWin === 2 || rowWin === 6) ? styles.winSquare : ""]}>
          {renderIcon(1, 2)}
        </TouchableOpacity>
      </View>
      <View style={{ flexDirection: "row" }}>
        <TouchableOpacity onPress={() => onSquarePress(2,0)}
          style={[styles.square, { borderBottomWidth: 0, borderLeftWidth: 0 },
            (rowWin === 3 || rowWin === 4 || rowWin === 8) ? styles.winSquare : ""]}
        >
          {renderIcon(2, 0)}
        </TouchableOpacity>
        <TouchableOpacity onPress={() => onSquarePress(2,1)} 
        style={[styles.square, { borderBottomWidth: 0 },
          (rowWin === 3 || rowWin === 5) ? styles.winSquare : ""]}>
          {renderIcon(2, 1)}
        </TouchableOpacity>
        <TouchableOpacity onPress={() => onSquarePress(2,2)}
          style={[styles.square, { borderBottomWidth: 0, borderRightWidth: 0 },
            (rowWin === 3 || rowWin === 6 || rowWin === 7) ? styles.winSquare : ""]}
        >
          {renderIcon(2, 2)}
        </TouchableOpacity>
      </View>

    {/* Create a button - that will restart the game: */}
      <TouchableOpacity style={styles.btn} onPress={()=>restartGame()}>
        <Text style={styles.familyTxt}>Restart</Text>
      </TouchableOpacity>
    </View>
  );
}