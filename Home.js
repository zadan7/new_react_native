import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native';

const Home=()=> {
  return (
    <View style={styles.container}>
      <Text style={{color:"red",fontSize:"2em",fontWeight:"2em"}}>Welcome to Zextras Company </Text>
      <StatusBar style="auto" />
    <Button title='Click me' >hello</Button>
   
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