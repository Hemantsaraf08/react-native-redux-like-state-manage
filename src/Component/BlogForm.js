import React, { useState } from 'react'
import { View, Text, StyleSheet, TextInput, Button } from 'react-native'

const BlogForm = ({ initialValues, onSubmit }) => {
    const [title, settitle] = useState(initialValues.title);
    const [content, setcontent] = useState(initialValues.content);

    return (
        <View>
            <Text style={styles.heading}>Blog Title</Text>
            <TextInput
                style={styles.input}
                value={title}
                onChangeText={(changedText) => settitle(changedText)}
            />
            <Text style={styles.heading}>Blog Content</Text>
            <TextInput
                style={styles.input}
                value={content}
                onChangeText={(changedText) => setcontent(changedText)}
            />
            <Button
                title="Save Blog"
                onPress={()=>onSubmit(title, content)}
            />
        </View>
    )
}

BlogForm.defaultProps={
    initialValues:{
        title: '',
        content: ''
    }
}

const styles = StyleSheet.create({
    heading:{
        textAlign: 'center',
        padding: 5,
        fontSize: 18,
    },
    input:{
        fontSize: 20,
        padding: 5,
        margin: 5,
        borderWidth: 1
    }
})

export default BlogForm;