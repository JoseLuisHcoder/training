
import { useNavigation } from '@react-navigation/native';
import * as React from 'react';
import * as RN from 'react-native';

export default function  Home() {
   const navigation = useNavigation()
  return (
    <>
        <RN.Text>Home</RN.Text>
        <RN.Button title= 'go to Add screen' onPress={() => navigation.navigate('Add')} />
    </>
  )
}

 