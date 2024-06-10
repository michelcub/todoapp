import { View, Text, StyleSheet } from "react-native"


export const Profile = ()=> {
    return(
        <View style={styles}>
            <Text>Hello Profile</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    flex:1,
    paddingTop: 20,
    backgroundColor: 'tomato',
    alignItems: 'center',
})