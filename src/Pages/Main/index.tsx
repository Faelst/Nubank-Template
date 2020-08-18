import React from "react";
import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  Button,
  TouchableOpacity,
} from "react-native";
import styles from "./styles";
import Header from "../../Components/Header";
import Tabs from "../../Components/Tabs/index";
import Icon from "react-native-vector-icons/MaterialIcons";
import IconFont from "react-native-vector-icons/FontAwesome";
import IconFather from "react-native-vector-icons/Feather";
import Card from "../../Components/Cards";

function Main() {
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.cardContainer}>
        <ScrollView
          contentContainerStyle={{
            paddingHorizontal: 20,
          }}
        >
          <View style={styles.card}>
            <View style={styles.cardHeader}>
              <View style={styles.cardStartHeader}>
                <IconFont name="credit-card" size={24} color="#666"></IconFont>
                <Text style={styles.cardStartHeaderText}>
                  Cartão de crédito
                </Text>
              </View>
            </View>
            <View style={styles.cardContent}>
              <Text style={styles.cardTextContentCreditCard}>FATURA ATUAL</Text>
              <Text style={styles.cardTextContentCreditCardValue}>
                R$ 225,60
              </Text>
              <View style={styles.containerCreditCardFooter}>
                <Text style={styles.cardTextFooterCreditCard}>
                  Limite disponível{" "}
                </Text>
                <Text style={styles.cardTextCreditCardLimitValue}>
                  R$ 725,16
                </Text>
              </View>
            </View>

            <View style={styles.cardFooter}>
              <IconFont name="heartbeat" size={24} color="#666"></IconFont>
              <View style={styles.cardDescription}>
                <Text style={styles.cardTextFooter}>
                  Compra mais recente em Raia no valor de R$ 21,04 hoje
                </Text>
              </View>
              <View style={styles.cardRightIcon}>
                <Icon name="keyboard-arrow-right" size={20} color="#666" />
              </View>
            </View>
          </View>

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
                  Transferência de R$ 600.000,00 feita por Rafael Augusto em 17
                  AGO
                </Text>
              </View>
              <View style={styles.cardRightIcon}>
                <Icon name="keyboard-arrow-right" size={20} color="#666" />
              </View>
            </View>
          </View>

          <View style={styles.cardRewardsContent}>
            <IconFather name="gift" size={30} color="#666" />
            <Text style={styles.cardRewardsTitle}>Nubank Rewards</Text>
            <Text style={styles.cardRewardsSubject}>
              Acumule pontos que nunca expiram e troque por passagens aéreas ou
              serviços que você realmente usa.
            </Text>
            <TouchableOpacity
              style={styles.appButtonContainer}
            >
              <Text style={styles.appButtonText}>ATIVE O SEU REWARDS</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>

      <Tabs />
    </View>
  );
}

export default Main;
