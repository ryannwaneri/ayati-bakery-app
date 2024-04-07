import { useState } from "react"
import { View, Text, Pressable, StyleSheet, TextInput } from "react-native"
import { AntDesign } from "@expo/vector-icons"


export default Login = () => {

    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")

    return(
        <View style={styles.container}>
            <TextInput
                value={email}
                onChangeText={text=>setEmail(text)}
                placeholder="Email"
                placeholderTextColor={"black"}
                style={styles.textInput}
            />
            <TextInput
                value={password}
                onChangeText={text=>setPassword(text)}
                placeholder="Password"
                placeholderTextColor={"black"}
                secureTextEntry={true}
                style={styles.textInput}

            />
            <Pressable style={styles.loginButton}>
                <Text style={styles.loginButtonText}>Login</Text>
            </Pressable>
            <Text style={styles.noAccountText}>Or</Text>
            <Pressable style={styles.googleSignInButton}>
                <AntDesign name="google" size={24} color="white" />
                <Text style={styles.googleSignInButtonText}>Sign in with google</Text>
            </Pressable>
            <Text style={styles.noAccountText}>Don't have an account?</Text>
            <Pressable>
                <Text style={styles.smallCreateAccountButton}>Create account</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex:1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center'
    },
    loginButton:{
      marginTop:20,  
      marginBottom: 15,
      width: '90%',
      alignItems: 'center',
      backgroundColor: '#7D0000',
      borderRadius: 8,
      paddingVertical: 12,
    },
    loginButtonText:{
      fontSize: 16,
      color: 'white',
      fontWeight: '300'
    },
    
    googleSignInButton:{
      flexDirection: 'row',
      marginTop:60,
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
    textInput:{
        borderWidth: 1,
        borderEndColor: 'black',
        width: '90%',
        marginBottom: 15,
        paddingVertical: 10,
        paddingHorizontal: 10,
        borderRadius: 6,
        fontWeight: "500"
    }
  });
  