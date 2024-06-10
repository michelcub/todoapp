import { Link } from "@react-navigation/native"
import { useEffect, useState } from "react"
import { View, Text, TextInput, Button } from "react-native"
import { StyleSheet } from "react-native"
import useAuthStore from "../../context/authContext"


export const Login = ({ navigation }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const auth = useAuthStore();
    
    useEffect(()=>{
        if(auth.is_login){
            navigation.navigate('AppTab')
        }
    },[
        auth.is_login
    ])

    const handleLogin = () => {
        auth.login(email, password);
    };

    return (
        <View style={style.container}>
            <Text style={style.title}>Login</Text>
            <View style={style.boxInput}>
                <TextInput
                    placeholder="example@domain.com"
                    style={style.input}
                    onChangeText={setEmail}
                    value={email}
                />
                <TextInput
                    placeholder="**********"
                    style={style.input}
                    onChangeText={setPassword}
                    value={password}
                    secureTextEntry
                />
                <Button title="Login" onPress={handleLogin} />
            </View>

            <View style={style.linkContainer}>
                <Link style={style.links} to={{ screen: "Register" }}>Register</Link>
                <Text style={style.links}>or</Text>
                <Link style={style.links} to={{ screen: "Recovery" }}>Recovery</Link>
            </View>
        </View>
    );
};

const style = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        backgroundColor: 'tomato'
    },
    title: {
        fontSize: 40,
        marginBottom: 40,
        color: 'white'
    },
    boxInput: {
        alignItems: "center",
        justifyContent: 'space-around',
        width: 300,
        height: 200,
        backgroundColor: 'rgba(0,0,0,0.2)',
        padding: 15,
        borderRadius: 5,
    },
    input: {
        backgroundColor: 'rgba(0,0,0,0.2)',
        height: 40,
        borderRadius: 5,
        marginBottom: 10,
        width: '100%',
        padding: 4
    },
    linkContainer: {
        flexDirection: "row",
        gap: 10,
        padding: 5
    },
    links: {
        color: 'white',
        textDecorationLine: "underline"
    }
});
