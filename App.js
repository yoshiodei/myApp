import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, TextInput, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.profileView}>
          <Image source={require("./assets/profile.png")} style={styles.image} />
      </View>
      <View style={styles.inputStyles}>
        <TextInput placeholder="username" style={styles.input} />
      <TextInput placeholder="email" style={styles.input}/>
      <TextInput placeholder="password" style={styles.input}/>
      </View>
      
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
  },

  inputStyles: {
      flex: 1,
      justifyContent: 'center',
  },

  image: {
  marginTop: 40,  
  height: 150,
  width: 150,  
  borderRadius: 50,
  },

  input: {
      width: 300,
      height: 30,
      margin: 10,
      borderWidth: 2,
      borderColor: "white",
      borderRadius: 2,
      paddingLeft: 5,
  },
  
  profileView: {
      flex: 0.5,
      alignItems: "center",
      justifyContent: "center",
  }


});
