import { useEffect, useState } from "react"
import { View, Text, StyleSheet, TextInput, Button, Pressable, ScrollView, FlatList } from "react-native"
import { Search } from "../../Components/Home/searchNotes"
import useNotesContext from "../../context/notesContext"
import { AddNote } from "../../Components/Home/createNote"


export const Home = ()=> {
    const [search, setSearch] = useState()
    const [noteList, setNoteList] = useState([])

    const note = useNotesContext()

    useEffect(()=>{
        if(note?.filterd?.length){
            setNoteList([...note.filtered])
        }else if(note?.list?.length){
            setNoteList([...note.list])
        }
    },[note.note_list, note.filtered])

    

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
            <Search/>
            
            <View style={styles.body}>

                {noteList && noteList?.length?<FlatList 
                  data={noteList}
                  renderItem={handleRenderItems}
                  keyExtractor={item=>item.id}
                />
                :(
                    <View style={{flex:1, alignItems: 'center', justifyContent: 'center'}}>
                        <Text style={{fontSize: 20}}>No hay notas</Text>
                    </View>
                )
                }

                <AddNote/>
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
    
})