import { Link } from "@react-navigation/native"
import { View, Text, TextInput, Button } from "react-native"
import { StyleSheet } from "react-native"
import useAuthStore from "../../context/authContext"
import { useState } from "react"


export const Register = ({ navigation}) => {

    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    const auth = useAuthStore()

    const handleRegister = ()=> {
        console.log(email)
        console.log(password)
        auth.register(email, password)
    }

    return (
        <View style={style}>
            <Text style={style.title}>Register</Text>
            <View style={style.boxInput}>
                <TextInput 
                placeholder="example@domain.com" 
                style={style.input}
                    onChange={setEmail}
                />
                <TextInput 
                    placeholder="**********" 
                    style={style.input}
                    onChange={setPassword}
                />
                <Button 
                title="Register"
                onPress={
                    ()=>{handleRegister()}
                }    
                />
            </View>

            <View style={style.linkContainer}>
                <Link style={style.links} to={{screen:'Login'}}>Login</Link>
                <Text style={style.links}>or</Text>
                <Link style={style.links} to={{screen:'Recovery'}}>Recovery</Link>
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    justifyContent: 'center',
    alignItems: 'center',
    flex:1,
    backgroundColor: 'tomato',
    title:{
        fontSize: 40,
        marginBottom: 40,
        color: 'white',
    },
    boxInput:{
        alignItems:"start",
        justifyContent: 'space-around',
        width: 300,
        height:200,
        backgroundColor: 'rgba(0,0,0,0.2)',
        padding: 15,
        gap: 10,
        borderRadius:5,
    },
    input:{
        backgroundColor: 'rgba(0,0,0,0.2)',
        height: 40,
        borderRadius: 5,
        padding: 5,
    },
    linkContainer:{
        flexDirection: "row",
        gap: 10,
        padding: 5
    },
    links:{
        color: 'white',
        textDecorationLine: "underline"
    },

})