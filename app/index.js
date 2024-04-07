import { useEffect, useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Link } from 'expo-router'
import { AntDesign } from '@expo/vector-icons'
import { useFonts } from 'expo-font'
import * as SplashScreen from 'expo-splash-screen'

export default function App() {

  const [fontsLoaded] = useFonts({
    'inter':require('../fonts/inter.ttf')
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
    <View style={styles.container}>
      <Text style={styles.welcomeMessage}>Welcome to Bakery App</Text>
      <Pressable style={styles.createAccountButton}>
        <Text style={styles.createAccountButtonText}>Create Account</Text>
      </Pressable>
      <Text>Or</Text>
      <Pressable style={styles.loginButton}>
        <Text style={styles.loginButtonText}>Login</Text>
      </Pressable>
      <Pressable style={styles.googleSignInButton}>
        <AntDesign name="google" size={24} color="white" />
        <Text style={styles.googleSignInButtonText}>Sign in with google</Text>
      </Pressable>
      <Text style={styles.noAccountText}>Don't have an account?</Text>
      <Pressable>
        <Text style={styles.smallCreateAccountButton}>Create account</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  welcomeMessage: {
    marginTop: 170,
    fontFamily:'Inter',
    fontWeight: '700',
    fontSize: 30
  },
  createAccountButton:{
    marginTop: 60,
    marginBottom: 15,
    width: '90%',
    alignItems: 'center',
    backgroundColor: '#7D0000',
    borderRadius: 8,
    paddingVertical: 12,
  },
  createAccountButtonText:{
    fontSize: 16,
    color: 'white',
    fontWeight: '300'
  },
  loginButton:{
    marginTop: 15,
    width: '90%',
    borderWidth:2,
    borderColor: 'black',
    alignItems: 'center',
    borderRadius: 8,
    paddingVertical: 12,
  },
  loginButtonText:{
    fontSize: 16,
    fontWeight: '600'
  },
  googleSignInButton:{
    flexDirection: 'row',
    marginTop:80,
    gap:10,
    backgroundColor:'black',
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 8,
    borderRadius: 20
  },
  googleSignInButtonText:{
    color: 'white',
    fontSize: 16,
    fontWeight: '300'
  },
  noAccountText:{
    marginTop: 10,
    fontSize: 16,
    color: '#797979',
    fontWeight: '400'
  },
  smallCreateAccountButton:{
    marginTop: 10,
    fontWeight: 'bold',
    fontSize: 16
  },

});
