import React, { useContext, useEffect } from 'react'
import { View, Text, StyleSheet, Button, FlatList, TouchableOpacity } from 'react-native'
import { Context as BlogContext } from '../Context/BlogContext'
import { Feather } from '@expo/vector-icons'
const IndexScreen = ({ navigation }) => {
    const blogContextObj = useContext(BlogContext);
    const deleteFn = blogContextObj?.deleteBlog(blogContextObj.dispatch)
    const getBlogsFn=blogContextObj.getBlogs(blogContextObj.dispatch)

    useEffect(()=>{
        getBlogsFn();
        const listener=navigation.addListener('didFocus', ()=>{
            getBlogsFn()
        })
        return ()=>{
            listener.remove()
        }
    },[])

    return (
        <View>
            {/* <Button
                //if you don't want to do call actions with disptach alternatively you can
                //do this in createDataContext, that way you don't have to pass dispatch as value to {children}
                //refer boundActions obj in createDataContext
                onPress={() => blogContextObj?.addBlogs(blogContextObj.dispatch)}
                title="Add Blog"
            /> */}
            <FlatList
                data={blogContextObj?.state}
                keyExtractor={(blog) => blog.id}
                renderItem={({ item }) => {
                    return <TouchableOpacity
                        onPress={() => navigation.navigate("Show", { id: item.id })}>
                        <View style={styles.row}>
                            <Text style={styles.title}>{item?.title}</Text>
                            <Text style={styles.title}>{item?.id}</Text>
                            <TouchableOpacity onPress={() => deleteFn(item.id)}>
                                <Feather
                                    name='trash'
                                    style={styles.icon}
                                />
                            </TouchableOpacity>
                        </View>
                    </TouchableOpacity>
                }}
            />
        </View>
    )
}

IndexScreen.navigationOptions = ({ navigation }) => {
    return {
        headerRight: () => (
            <TouchableOpacity onPress={() => navigation.navigate('Create')}>
                <Feather name="plus" size={30} />
            </TouchableOpacity>
        )
    }

}

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        marginBottom: 5,
        borderWidth: 1,
    },
    title: {
        fontSize: 18,
    },
    icon: {
        fontSize: 20,
    }

})

export default IndexScreen