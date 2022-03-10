import React, {useContext} from 'react'
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'
import { Context as blogContext } from '../Context/BlogContext';
import { EvilIcons } from '@expo/vector-icons'

const ShowScreen=({navigation})=>{
    const id=navigation.getParam('id')
    const blogsObj=useContext(blogContext)
    const {state:blogData}=blogsObj;
    const blogPost=blogData.find((blog)=>blog.id===id)
    return(
        <View>
            <Text>{blogPost.title}</Text>
            <Text>{blogPost.content}</Text>
        </View>
    )
}
ShowScreen.navigationOptions=({navigation})=>{
    const id=navigation.getParam('id')
    return {
        headerRight:()=>(
            <TouchableOpacity onPress={()=>navigation.navigate('Edit',{id})}>
                <EvilIcons name="pencil" size={30}/>
            </TouchableOpacity>
        )
    }
}
const styles=StyleSheet.create({})

export default ShowScreen;