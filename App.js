import React,{useState} from "react";
import { Text,View,Image,TextInput,TouchableOpacity} from "react-native"
import {registerStyle} from './src/styles/MainStyle'
import { ToastAndroid } from "react-native";


const App=()=>{
 const [firstName,setFirstName]=useState('');
 const [lastName,setLastName]=useState('');
 const [email,setEmail]=useState('');
 const [password,setPassword]=useState('');
 const [confirmPassword,setConfirmPassword]=useState('');

 const handleClick=()=>{
    if (firstName && lastName && email && password && confirmPassword) {
      if (password === confirmPassword) {
        ToastAndroid.show("Registration Successful! 🎉", ToastAndroid.SHORT);
        console.log("User Info");
        console.log("Name: " + firstName + " " + lastName);
        console.log("Email:",email);
      } else {
           ToastAndroid.show("Passwords Do Not Match", ToastAndroid.SHORT);
      }
    } else {
            ToastAndroid.show("Please Fill in All Fields", ToastAndroid.SHORT);
    }
 };
  return (
    <View style={registerStyle.container}>
      <Image
     style={registerStyle.imageContainer}
     source={require('./src/assets/logo.png')}>

  </Image>

      <Text style={registerStyle.title}>Sign Up</Text>

      <TextInput
        style={registerStyle.input}
        placeholder="First Name"
        value={firstName}
        onChangeText={setFirstName}
      />

      <TextInput
        style={registerStyle.input}
        placeholder="Last Name"
        value={lastName}
        onChangeText={setLastName}
      />

      <TextInput
        style={registerStyle.input}
        placeholder="Email"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />

      <TextInput
        style={registerStyle.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <TextInput
        style={registerStyle.input}
        placeholder="Confirm Password"
        secureTextEntry
        value={confirmPassword}
        onChangeText={setConfirmPassword}
      />

      <TouchableOpacity style={registerStyle.button} onPress={handleClick}>
        <Text style={registerStyle.buttonText}>Register</Text>
      </TouchableOpacity>
    </View>
  );
}

export default App;