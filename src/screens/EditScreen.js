import React, {useContext, useState} from 'react'
import {View, Text, StyleSheet, Button, TextInput} from 'react-native'
import BlogForm from '../Component/BlogForm';
import { Context as blogContext } from '../Context/BlogContext';
const EditScreen=({navigation})=>{
    const id=navigation.getParam('id')
    const blogsObj=useContext(blogContext)
    const {state:blogData, editBlog, dispatch}=blogsObj;
   
    const blogPost=blogData.find((blog)=>blog.id===id)
    const title=blogPost.title
    const content=blogPost.content
    const editBlogFn=editBlog(dispatch);
    return(
       <BlogForm
        initialValues={{title, content}}
        onSubmit={(title, content)=>editBlogFn(title, content,id, ()=>navigation.pop())}
       />
    )
}

const styles=StyleSheet.create({})

export default EditScreen;