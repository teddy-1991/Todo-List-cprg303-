import { View, Text } from 'react-native';
import React from 'react';
import App from '../components/app';
const Index = () => {
  return (
    <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>

      <Text style={{ fontSize: 25 }}>I am in React native class</Text>
      <App />
    </View>
  );
};

export default Index;
