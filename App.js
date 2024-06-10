import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator} from "@react-navigation/native-stack";
import { StyleSheet } from "react-native";
import { Ionicons } from '@expo/vector-icons'; // Ejemplo de importación de iconos


import { Onboarding } from "./screens/Onboarding/Onboarding";
import { Login } from "./screens/Auth/Login";
import { Register } from "./screens/Auth/Register";
import { Recovery } from "./screens/Auth/Recovery";
import { AppTab, Home } from "./screens/AppTab";

export default function App() {

  const Stack = createNativeStackNavigator()

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" screenOptions={{headerShown:false}}>
        <Stack.Screen name="Onboarding" component={Onboarding} />
        <Stack.Screen name="Login" component={Login}/>
        <Stack.Screen name="Register" component={Register}/>
        <Stack.Screen name="Recovery" component={Recovery}/>
        <Stack.Screen name="AppTab" component={AppTab}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
