import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';

const challenges = [
  { id: '1', title: '100 Push-Ups Daily', desc: 'Complete 100 push-ups every day.' },
  { id: '2', title: '2,000 in 18 Days', desc: 'Community challenge.' },
];

export default function Challenges({ navigation }) {
  return (
    <View style={{ flex:1, backgroundColor:'#fff', padding:20 }}>
      <FlatList
        data={challenges}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity 
            style={{ padding:20, marginBottom:10, backgroundColor:'#FFCC00', borderRadius:10 }}
          >
            <Text style={{ fontWeight:'bold', color:'#000' }}>{item.title}</Text>
            <Text style={{ color:'#333' }}>{item.desc}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
