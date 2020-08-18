import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#80259c'
    },
    
    cardContainer:{
        flex: 1,
        borderColor: '#e6e6F0',
        overflow: 'hidden'
    },

    
    /*--------------------------------------*/

    card:{
      height: 350,
      marginBottom: 30,
      backgroundColor: "#FFF",
      borderRadius: 2,
      justifyContent: "center"
    },

    cardStartHeader:{
      flexDirection:'row',
      justifyContent: 'center',
      alignItems:"center"
    },

    cardStartHeaderText:{
      marginLeft: 15,
      color: "#999"
    },

    cardHeader:{
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingHorizontal: 20,
      paddingTop: 30,
      },
  
    cardContent:{
      flex: 1,
      paddingHorizontal: 30,
      justifyContent: 'center'
    },

    cardTextContent:{
      fontSize: 20,
      color: "#999"
    },

    cardTextContentCreditCard:{
      fontSize: 15,
      color: "#06bfbc",
      fontWeight: 'bold'
    },

    cardTextContentCreditCardValue:{
      fontSize: 35,
      color: '#06bfbc',
      fontWeight: "bold"
    },

    containerCreditCardFooter:{
      marginTop: 3,
      flexDirection: "row"
    },

    cardTextCreditCardLimitValue:{
      fontSize: 16,
      color:'#00b509',
      fontWeight: 'bold'
    },
    
    cardTextFooterCreditCard:{
      fontSize: 16
    },
    
    
    
    cardTextContentValue:{
      fontSize: 35
    },

    cardFooter:{
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      paddingHorizontal: 20,
      paddingVertical: 30,
      backgroundColor: '#eee',
      borderBottomEndRadius: 5,
      borderBottomLeftRadius: 5,
      paddingLeft: 30
    },

    cardDescription:{
      width: 280
    },

    cardTextFooter:{
      fontSize: 12,
      marginLeft: 5,
      color: "#333",
    },

    
    cardRewardsContent:{
      height: 350,
      marginBottom: 30,
      backgroundColor: "#FFF",
      borderRadius: 2,
      alignItems:"center",
      padding: 20,
      
    },

    cardRewardsTitle:{
      marginTop: 30,
      fontSize: 27,
      fontWeight: 'bold'
    },

    cardRewardsSubject:{
      marginTop: 20,
      lineHeight: 26,
      fontSize: 16,
      width: 300,
      textAlign: 'center'
    },

    appButtonContainer: {
      width: 300,
      height: 55,
      marginTop: 70,
      justifyContent: 'center',
      backgroundColor: "#fff",
      borderRadius: 3,
      paddingVertical: 10,
      paddingHorizontal: 12,
      borderWidth: 1,
      borderColor: '#80259c'
    },
    appButtonText: {
      fontSize: 15,
      color: "#80259c",
      fontWeight: "bold",
      alignSelf: "center",
      textTransform: "uppercase"
    }

  });
  
export default styles