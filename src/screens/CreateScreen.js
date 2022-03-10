import React, { useContext } from 'react'
import {StyleSheet} from 'react-native'
import BlogForm from '../Component/BlogForm';
import { Context as blogContext } from '../Context/BlogContext';

const CreateScreen = ({ navigation }) => {
    const {addBlogs, dispatch}=useContext(blogContext);
    const adderFn=addBlogs(dispatch);   
   
    return (
        <BlogForm
            onSubmit={(title, content)=>adderFn(title, content, ()=>navigation.navigate("Index"))}
        />
    )
}

const styles = StyleSheet.create({
  
})

export default CreateScreen;