import React from "react";
import { View, Text } from "react-native";
import styles from "./styles";
import Icon from "react-native-vector-icons/MaterialIcons"; 
import IconFont from "react-native-vector-icons/FontAwesome";


export default function Card() {
  return (
      <View style={styles.card}>
        <View style={styles.cardHeader}>
          <View style={styles.cardStartHeader}>
            <Icon name="attach-money" size={28} color="#666"></Icon>
            <Text style={styles.cardStartHeaderText}>Conta</Text>
          </View>
          <Icon name="visibility-off" size={28} color="#666"></Icon>
        </View>
        <View style={styles.cardContent}>
          <Text style={styles.cardTextContent}>Saldo Disponivel</Text>
          <Text style={styles.cardTextContentValue}>R$ 600.058,00</Text>
        </View>
        <View style={styles.cardFooter}>
            <IconFont name="dollar" size={24} color="#666"></IconFont>
              <View style={styles.cardDescription}>
                <Text style={styles.cardTextFooter}>
                  Compra mais recente em Raia no valor de R$ 21,04 hoje
                </Text>
              </View>
              <View style={styles.cardRightIcon}>
                <Icon name="keyboard-arrow-right" size={20} color="#666"/>
              </View>
        </View>
      </View>
  );
}
