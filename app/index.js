import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Link } from 'expo-router'
import Name from './settings/[name]';
import { AntDesign } from '@expo/vector-icons'

export default function App() {

  const [fontsLoaded] = useFonts({
    'inter':require('/fonts/inter.ttf')
  });

  useEffect(()=>{
    async function prepare() {
      await SplashScreen.preventAutoHideAsync();
    }
    prepare()
  },[])

  if(!fontsLoaded){
    return undefined
  }else{
    SplashScreen.hideAsync();
  }

  return (
    <>
      <Text>Welcome to Bakery App</Text>
      <Pressable>Create Account</Pressable>
      <Text>Or</Text>
      <Pressable>Login</Pressable>
      <Pressable>
        <AntDesign name="google" size={24} color="black" />
        Sign in with google
      </Pressable>
      <Text>Dont have an account?</Text>
      <Pressable>Create one</Pressable>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
