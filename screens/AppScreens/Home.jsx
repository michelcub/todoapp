import { useState } from "react"
import { View, Text, StyleSheet, TextInput, Button, Pressable, ScrollView, FlatList } from "react-native"


export const Home = ()=> {
    const [search, setSearch] = useState()
    const [noteList, setNoteList] = useState([])


    const handleRenderItems = ({item}) => {
        return(
            <View>
                <Text>{item.title}</Text>
                <Text>item.data</Text>
            </View>
        )
    }


    return(
        <View style={styles}>
            <View style={styles.header}>
                <TextInput 
                    placeholder="Buscar nota"
                    onChange={setSearch}
                    value={search}
                />
            </View>
            
            <View style={styles.body}>

                <FlatList 
                  data={noteList}
                  renderItem={handleRenderItems}
                  keyExtractor={item=>item.id}
                />

                <View style={styles.createNote}>
                    <Pressable style={styles.button} 
                    onPress={
                        ()=> console.log('hello')
                    }
                    >
                        <Text style={{color:'white', fontSize:40}}>+</Text>
                    </Pressable>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    flex:1,
    paddingTop: 40,
    backgroundColor: '',
    alignItems: 'center',

    header: {
        alignItems: 'start',
        width: 200,
        height: 40,
        backgroundColor: 'white',
        borderRadius: 25,
        paddingStart: 10,
        fontSize: 30,
        justifyContent: 'center',
        borderWidth: 2,
        borderColor: 'tomato'
    },
    body:{
        width: '100%',
        height: '90%',
        marginTop: 15
    },
    createNote: {
        width:60,
        height: 60,
        position: "absolute",
        bottom: 50,
        right: 10,
    },
    button:{
        height: 60,
        width: 60,
        borderRadius: 50,
        backgroundColor: 'tomato',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        fontSize: 20
    }
})