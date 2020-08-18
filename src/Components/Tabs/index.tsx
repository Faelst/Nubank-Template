import React from "react";
import { View, Text, ScrollView } from "react-native";
import Icon  from "react-native-vector-icons/MaterialIcons";
import styles from './styles'

export default function Tabs() {
  return (
    <View style={styles.container}>
      <ScrollView horizontal={true} contentContainerStyle={{padding: 10 , paddingRight: 10}} showsHorizontalScrollIndicator={false}>
        <View style={styles.tabItem}>
            <Icon name='credit-card' size={24} color="#FFF"/>
            <Text style={styles.tabText}>Cartao Virtiual</Text>
        </View>
        <View style={styles.tabItem}>
            <Icon name='person-add' size={24} color="#FFF"/>
            <Text style={styles.tabText}>Indicar amigo</Text>
        </View>
        <View style={styles.tabItem}>
            <Icon name='lock' size={24} color="#FFF"/>
            <Text style={styles.tabText}>Bloquear Cartão</Text>
        </View>
        <View style={styles.tabItem}>
            <Icon name='arrow-upward' size={24} color="#FFF"/>
            <Text style={styles.tabText}>Transferir</Text>
        </View>
        <View style={styles.tabItem}>
            <Icon name='arrow-downward' size={24} color="#FFF"/>
            <Text style={styles.tabText}>Depositar</Text>
        </View>
        <View style={styles.tabItem}>
            <Icon name='chat-bubble-outline' size={24} color="#FFF"/>
            <Text style={styles.tabText}>Cobrar</Text>
        </View>
      </ScrollView>
    </View>
  );
}