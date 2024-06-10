import { useEffect } from "react"
import { SafeAreaView, StyleSheet, View } from "react-native"
import useAuthStore from "../context/authContext"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { Home } from "./AppScreens/Home"
import { Favorites } from "./AppScreens/Favorites"
import { Profile } from "./AppScreens/Profile"


import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';

export const AppTab = ({navigation}) => {

    const Tab = createBottomTabNavigator()

    const auth = useAuthStore()
    useEffect(()=>{
        console.log(auth.user)
    },[
        auth.is_login, auth.user
    ])
    return(
        <SafeAreaView style={{flex:1, }}>
            <View style={{ flex: 1, Bottom: 10, }}>
                <Tab.Navigator  screenOptions={{headerShown:false,tabBarStyle: { paddingBottom:20, height: 70 },}} >
                    <Tab.Screen 
                        name="Home" 
                        component={Home} 
                        options={{tabBarIcon:()=>(
                            <AntDesign name="home" size={24} color="black" />
                        )
                        }}
                    />
                    <Tab.Screen 
                        name="Favorites" 
                        component={Favorites}
                        options={{tabBarIcon:()=>(
                            <MaterialIcons name="favorite-border" size={24} color="black" />
                        )
                        }}
                        />
                    <Tab.Screen 
                        name="Profile" 
                        component={Profile}
                        options={{tabBarIcon:()=>(
                            <EvilIcons name="user" size={34} color="black" />
                        )
                        }}
                        />
                </Tab.Navigator>
            </View>
        </SafeAreaView>
        
    )
}


const style = StyleSheet.create({
    justifyContent: 'center',
    alignItems: 'center',
    flex:1


})