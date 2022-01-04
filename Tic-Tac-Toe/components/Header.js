import React from "react";
import { View, Text, StyleSheet } from "react-native";
import styles from "../assets/style"
const Header = (props) => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerTxt}>{props.headerTxt}Tic Tac Toe</Text>
    </View>
  );
};

export default Header
