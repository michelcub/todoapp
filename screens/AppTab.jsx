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

export const AppTab = ({ navigation }) => {
    const Tab = createBottomTabNavigator();
    const auth = useAuthStore();

    useEffect(() => {
        console.log(auth.user);
    }, [auth.is_login, auth.user]);

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ flex: 1 }}>
                <Tab.Navigator
                    screenOptions={({ route }) => ({
                        headerShown: false,
                        tabBarStyle: { paddingBottom: 10, height: 70, backgroundColor: 'lightgray' },
                        tabBarIcon: ({ color, size }) => {
                            let iconName;

                            if (route.name === 'Home') {
                                iconName = <AntDesign name="home" size={size} color={color} />;
                            } else if (route.name === 'Favorites') {
                                iconName = <MaterialIcons name="favorite-border" size={size} color={color} />;
                            } else if (route.name === 'Profile') {
                                iconName = <EvilIcons name="user" size={size} color={color} />;
                            }

                            return iconName;
                        },
                        tabBarActiveTintColor: 'tomato',
                        tabBarInactiveTintColor: 'gray',
                    })}
                >
                    <Tab.Screen name="Home" component={Home} />
                    <Tab.Screen name="Favorites" component={Favorites} />
                    <Tab.Screen name="Profile" component={Profile} />
                </Tab.Navigator>
            </View>
        </SafeAreaView>
    );
}

const style = StyleSheet.create({
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
});
