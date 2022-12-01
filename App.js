import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
export default function App() {
 return (
   <View style={styles.container}>


   <View style={styles.box1}>
   <Text style={styles.textbox1}>Projet SJP 5</Text>
   </View>

   <View style= {styles.boxmid}>
   <View style= {styles.left}>
   <Text style= {styles.lefttext}>Texte 1</Text>
   <Text style= {styles.lefttext}>Texte 2</Text>
   <Text style= {styles.lefttext}>Texte 3</Text>
   </View>
   <View style= {styles.middle}>
   <TouchableOpacity onPress={()=>{}} style={styles.button1}>
   <Text style={styles.textbutton1}>PS</Text>
   </TouchableOpacity>
   <TouchableOpacity onPress={()=>{}} style={styles.button2}>
   <Text style={styles.textbutton2}>IV</Text>
   </TouchableOpacity>
   </View>
   <View style= {styles.right}></View>
   </View>

   <View style= {styles.boxbas}>
   <View style= {styles.boxbas1}>
   <TouchableOpacity onPress={()=>{}} style={styles.buttonbas1}>
   <Text style={styles.textbt1}>+</Text>
   </TouchableOpacity>
   <TouchableOpacity onPress={()=>{}} style={styles.buttonbas1}>
   <Text style={styles.textbt1}>m</Text>
   </TouchableOpacity>
   <TouchableOpacity onPress={()=>{}} style={styles.buttonbas1}>
   <Text style={styles.textbt1}>-</Text>
   </TouchableOpacity>
   </View>
   <View style= {styles.boxbas2}>
   <TouchableOpacity onPress={()=>{}} style={styles.buttonbas1}>
   <Text style={styles.textbt1}>+</Text>
   </TouchableOpacity>
   <TouchableOpacity onPress={()=>{}} style={styles.buttonbas1}>
   <Text style={styles.textbt1}>m</Text>
   </TouchableOpacity>
   <TouchableOpacity onPress={()=>{}} style={styles.buttonbas1}>
   <Text style={styles.textbt1}>-</Text>
   </TouchableOpacity>
   </View>
   </View>


   </View>
 );
}
const styles = StyleSheet.create({
 container: {
   flex: 1,
   flexDirection: 'column',
   backgroundColor: 'white',
   alignItems: 'center',
   justifyContent: 'space-around',
 },
 box1:{
   height: 65,
   width: 250,
   backgroundColor: 'darkblue',
   justifyContent: 'center',
   alignItems: 'center',
   borderWidth: 2,
   borderRadius: 15,
   marginTop: 50,
 },
 textbox1:{
   fontSize: 35,
   color: 'white',
 },
 boxmid: {
   height: 400,
   width: 380,
   flexDirection: 'row',
   justifyContent: 'space-around',
   alignItems:'center',
   backgroundColor: 'white',
 },
 left:{
   height:390,
   width: 170,
   justifyContent: 'space-evenly',
   alignItems: 'center',
   backgroundColor: 'white',
   borderWidth:2,
   borderColor: 'purple',
   borderRadius: 5,
 },
 lefttext:{
   fontSize: 25,
   color: 'black',
 },
 right:{
   height:390,
   width: 170,
   backgroundColor: 'white',
   borderWidth: 2,
   borderColor: 'darkgreen',
   borderRadius: 5,
 },
 middle:{
   flexDirection: 'column',
   justifyContent: 'space-evenly',
   height: 390,
   width: 25,
   backgroundColor: 'white'

 },
 boxbas: {
   flexDirection: 'row',
   justifyContent: 'space-around',
   alignItems: 'center',
   height: 50,
   width: 380,
   backgroundColor: 'white',
   marginBottom: 150,
},
boxbas1: {
  flexDirection: 'row',
  backgroundColor: 'white',
  justifyContent: 'space-evenly',
  alignItems:'center',
  height: 45,
  width: 170,
  marginRight: 15,
},
buttonbas1:{
  backgroundColor: 'white',
  borderWidth: 2,
  borderRadius: 5,
  padding: 7,
},
textbt1: {
  fontSize:20,
  fontWeight: 'bold',
  color: 'darkblue',
},
boxbas2: {
  flexDirection: 'row',
  backgroundColor: 'white',
  justifyContent: 'space-evenly',
  alignItems:'center',
  height: 45,
  width: 170,
  marginLeft: 15,
},
button1: {
  backgroundColor: 'darkblue',
  borderWidth: 2,
  borderRadius: 5,

},
button2: {
  backgroundColor: 'darkblue',
  borderWidth: 2,
  borderRadius: 5,
},
textbutton1:{
  fontSize:15,
  color: 'white',
},
textbutton2:{
  fontSize:15,
  color: 'white',
},

});
