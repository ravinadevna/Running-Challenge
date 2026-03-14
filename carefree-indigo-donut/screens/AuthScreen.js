import React from 'react';
import { View, TextInput, Button } from 'react-native';

export default function AuthScreen({ navigation }) {
  return (
    <View style={{ flex:1, justifyContent:'center', padding:20, backgroundColor:'#fff' }}>
      <TextInput placeholder="Email" style={{ borderBottomWidth:1, marginBottom:10 }} />
      <TextInput placeholder="Password" secureTextEntry style={{ borderBottomWidth:1, marginBottom:20 }} />
      <Button title="Login" onPress={() => navigation.replace('Challenges')} color="#FFCC00" />
      <Button title="Register" onPress={() => navigation.replace('Challenges')} color="#000" />
    </View>
  );
}
