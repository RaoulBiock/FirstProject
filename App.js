import React from 'react'
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'
export default class App extends React.Component {
  render() {
    return (
      <View style = {styles.maincontainer}>
      
      <View style = {styles.box1}>
      <Text style = {styles.textst}>PROJET SJP5</Text>
      </View>
      
      <View style = {styles.boxall}>
      <View style = {styles.boxlet}></View>
      <View style = {styles.middlebox}>
      <TouchableOpacity onPress={()=>{}} style={styles.button}>
      <Text> pass </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>{}} style={styles.button}>
      <Text> pass </Text>
      </TouchableOpacity>
      </View>
      
      <View style = {styles.boxlet}>
      <Text> Texte 1 </Text>
      <Text> Texte 1 </Text>
      <Text> Texte 1 </Text>
      </View>
      
      <View style = {styles.boxbas}></View>
      </View>


      </View> // fermeture de la boite principal
   )
  }
}
const styles = StyleSheet.create({
  maincontainer:{
    flex:1,
    flexDirection: 'column',
  },
  box1:{
    alignItems: 'center',
    paddingTop: 70
  },
  textst: {
    fontSize: 25
  },
  boxall: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: 'white',
    justifyContent: 'space-evenly'

  },
  boxlet: {
    height: 200,
    width: 120,
    borderColor: 'blue',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    borderWidth: 2

  },
  middlebox: {
    height: 200,
    width: 50,
    backgroundColor: 'white',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-evnely'
  },
  boxbas: {
    
  }

})
