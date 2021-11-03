import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, TextInput, View, Image, Text, TouchableOpacity} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={[styles.header, styles.shadowProp]}>
        <Image source={require("./assets/arrow.png")} style={styles.header__icon} />
        <Text style={styles.header__heading}>Edit Profile</Text>
      </View>

      {/* ------ profile Image ------ */}

      <View style={styles.profileView}>
          <Image source={require("./assets/profile.png")} style={styles.image} />
          <View style={styles.photoView}>
            <Image source={require("./assets/camera.png")} style={styles.camera}/>
          </View>
      </View>

      {/* ------ user info ------ */}

      <View style={styles.userInfo}>
          <Text style={styles.userInfoHeader}>School</Text>
          <Text style={styles.userInfoText}>CodeTrain</Text>
      </View>

      <View style={[styles.userInfo, styles.userInfoText__Last]}>
          <Text style={styles.userInfoHeader}>Email Address</Text>
          <Text style={styles.userInfoText}>yoshi@email.com</Text>
      </View>

      <View style={styles.inputStyles}>
        <View style={styles.inputView}>
           <Text style={styles.inputText}>Name</Text>
           <TextInput placeholder="Enter Username" style={styles.input} />
        </View>
        
        <View style={styles.inputView}>
           <Text style={styles.inputText}>Nick Name</Text>
           <TextInput placeholder="Enter Nick Name" style={styles.input} />
        </View>

        <View style={[styles.inputView, styles.inputAlt]}>
           <Text style={styles.inputText}>Emergency Contact</Text>
           <TextInput placeholder="Enter Emergency Contact" style={styles.input} />
           <Image source={require("./assets/book.png")} style={styles.inputImg}/>
        </View>
      </View>
      
      <TouchableOpacity style={styles.btn}>
        <Text style={styles.btnText}>Update Profile</Text>
      </TouchableOpacity>
      
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

  header: {
    width: "100%",
    marginTop: 20,
    flex: 10,
    backgroundColor: "pink",
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
    
  },

  photoView:{
    position: "absolute",
    top: 85,
    left: 80,
    width: 40,
    height: 40,
    borderRadius: 50,
    backgroundColor: "lightblue",
    justifyContent: "center",
    alignItems: "center",
  },

  camera: {
    height: "70%",
    width: "70%",
  },

  shadowProp: {
    shadowColor: 'black',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },

  header__icon: {
    // backgroundColor: "black",
    position: "absolute",
    height: 20,
    width: 20,
    top: 10,
    left: 10,

  },

  header__heading: {
    fontSize: 20,
    color: "white",
    fontWeight: "600",
  },

  // user info

  userInfo: {
    width: "80%",
    marginTop: 20,
    marginBottom: 5,
    flex: 12,
  },

  userInfoHeader: {
    fontWeight: "700",
    color: "gray",
    marginBottom: 1,
  },

  userInfoText: {
    fontSize: 20,
    color: "white",
  },

  userInfoText__Last: {
    marginTop: 10,
    marginBottom: 0,
  },

  inputStyles: {
      justifyContent: 'center',
      flex: 50,
      justifyContent: "space-between",
      marginTop: 20,
  },

  inputView:{
    width: 300,
    alignItems: "flex-start",
  },

  inputText: {
    color: "gray",
    fontWeight: "600",
  },

  input: {
    width: "100%",
    height: 30,
    borderBottomWidth: 2,
    borderColor: "white",
},

inputAlt:{
  position: "relative",
},

inputImg: {
  position: "absolute",
  width: 30,
  height: 30,
  right: 0,
},

  image: {  
  height: 120,
  width: 120,  
  borderRadius: 100,
  },
  
  profileView: {
      marginTop: 25,
      alignItems: "center",
      justifyContent: "center",
      position: "relative",
  },

  btn: {
      backgroundColor: "lightblue",
      flex: 10,
      width: "65%",
      borderRadius: 50,
      alignItems: "center",
      justifyContent: "center",
      marginBottom: 30,
      marginTop: 40,
  },

  btnText: {
      
      color: "white",
      fontSize: 20,
      fontWeight: "600",
      letterSpacing: 1,
  },


});
