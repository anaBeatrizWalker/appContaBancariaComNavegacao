import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    container:{
      margin: 10,
    },
    titulo:{
      fontSize: 20,
      textAlign: "center"
    },
    label:{
      marginTop: 10,
    },
    inputs: {
      float: "right",
      border: "solid thin gray",
      borderRadius: 10,
      padding: 10,
      margin: 5,
      width: "100%",
    },
    legend: {
      textAlign: "center",
      fontSize: 18
    },
    switchs:{
      margin: 5,
      width: 80,
      height: 30
    },
    buttonSave:{
      alignItems: "center",
      padding: 3,
      backgroundColor: '#32a058',
      borderRadius: 10,
      marginTop: 10
    },
    buttonCancel:{
      alignItems: "center",
      padding: 3,
      backgroundColor: '#d41d1d',
      borderRadius: 10,
      marginTop: 10
    },
    textoButton: {
      color: '#FFF',
      fontSize: 16,
      padding: 10,
    },
  })


export {styles};