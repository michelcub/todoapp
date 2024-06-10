import { View, Text, StyleSheet } from "react-native"


export const Favorites = ()=> {
    return(
        <View style={styles}>
            <Text>Hello Favorites</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    flex:1,
    paddingTop: 20,
    backgroundColor: 'tomato',
    alignItems: 'center',
})