import { View, Text } from "react-native"
import { StyleSheet } from "react-native"


export const Recovery = ({ navigation}) => {
    return (
        <View style={style}>
            <Text>
                Hello recovery
            </Text>
        </View>
    )
}

const style = StyleSheet.create({
    justifyContent: 'center',
    alignItems: 'center',
    flex:1


})