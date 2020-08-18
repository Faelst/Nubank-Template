import React from "react";
import { View, Text, Image } from "react-native";
import styles from "./styles";
import NuLogo from "../../Assets/Nubank_Logo.png";
import Icon from "react-native-vector-icons/MaterialIcons";

export default function Header() {
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Image style={styles.logo} source={NuLogo}></Image>
        <Text style={styles.title}>Rafael</Text>
      </View>
      <Icon name="keyboard-arrow-down" size={20} color="#FFF"/>
    </View>
  );
}
