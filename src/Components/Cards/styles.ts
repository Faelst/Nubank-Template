import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({
    
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

    cardTextContentValue:{
      fontSize: 40
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
      
    },

    cardDescription:{
      width: 250
    },

    cardTextFooter:{
      fontSize: 12,
      marginLeft: 10,
      color: "#333",
    },

    

  });
  
export default styles