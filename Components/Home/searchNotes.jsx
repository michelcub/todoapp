import { View, TextInput, StyleSheet} from "react-native"
import { useState } from "react"
import useNotesContext from "../../context/notesContext"

export const Search = ()=>{
    const note = useNotesContext()
    
    const handleSearchNote = (value)=> {
        console.log('search:' , value)
        note.search(value)
    }

    return(
        <View style={styles.header}>
            <TextInput 
                placeholder="Buscar nota"
                onChangeText={handleSearchNote}
            />
        </View>
    )
}

const styles = StyleSheet.create({
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
})