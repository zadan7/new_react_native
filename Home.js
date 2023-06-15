import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Home=({navigation})=> {
  
  function Clickme (){
    console.log(AsyncStorage.getItem("input"))
    AsyncStorage.getItem("input",(data)=>console.log(data))
    console.log(data.value)
  }

  function handledata (text){
    AsyncStorage.setItem("input",text)
    console.log(text)
   
  }


  return (
    <View style={styles.container}>
      <Text style={{color:"red",fontSize:"2em",fontWeight:"2em",textAlign:"center"}}>Welcome to Zextras Company </Text>
      <StatusBar style="auto" />
      <br></br>
      <Text style={{color:"#333",fontSize:"1em",fontWeight:"2em",textAlign:"center"}}>What is your name </Text>

      <TextInput onChangeText={(text)=>{console.log(text),handledata(text)}} style={{backgroundColor:"",border:"1px solid black",width:"10em",padding:"0.5em"}}></TextInput>
   <br></br> <Button title='Click me'  onPress={()=> {
      Clickme()
      // navigation.navigate("About")
      }}>hello</Button>
   
    </View>
  );
}


const styles = StyleSheet.create({

 
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btn:{
    backgroundColor:"yellow",
    width:"15px",
    padding:"15px",
    color:"red"
    
  },
});

export default Home;