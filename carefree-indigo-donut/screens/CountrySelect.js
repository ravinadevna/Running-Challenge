import React from 'react';
import { View, Button } from 'react-native';

export default function CountrySelect({ navigation }) {
  return (
    <View style={{ flex:1, justifyContent:'center', alignItems:'center', backgroundColor:'#FFCC00' }}>
      <Button title="Australia" onPress={() => navigation.navigate('Auth')} color="#000" />
      <Button title="Canada" onPress={() => navigation.navigate('Auth')} color="#000" />
    </View>
  );
}
