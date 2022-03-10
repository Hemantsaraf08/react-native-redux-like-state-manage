import createDataContext from "./createDataContext"
import jsonServer from "../api/jsonServer"
const blogPostreducer=(state, action)=>{
    switch(action.type){
        case 'blogPost/get':
            return action.payload;
        case 'blogPost/add': return [...state, {title: action.payload.title, content: action.payload.content, 
                                                id: Math.floor(Math.random()*99999)}]
        case 'blogPost/delete':
            return state.filter(blogObj=>blogObj.id!=action.payload)
        case 'blogPost/edit':
            console.log(action.payload)
            return state.map(blog=>blog.id===action.payload.id?action.payload:blog)
        default: return state;
    }

}
const getBlogs=(dispatch)=>{
    return async ()=>{
        const response=await jsonServer.get('/blogPosts')
        dispatch({
            type: 'blogPost/get',
            payload: response.data
        })
    }
}
const addBlogs=(dispatch)=>{
    return async (title, content, callback)=>{
        await jsonServer.post('/blogPosts',{
            title, content
        })
        // dispatch({type: 'blogPost/add', payload:{title, content}})
        callback()
    }
}

const deleteBlog=(dispatch)=>{
    return async (id)=>{
        dispatch({type: 'blogPost/delete', payload: id});
        await jsonServer.delete(`/blogPosts/${id}`)
    }
}

const editBlog=(dispatch)=>{
    return async (title, content, id, callback)=>{
        dispatch({
            type: 'blogPost/edit',
            payload: {title, content, id}
        })
        callback()
        await jsonServer.put(`/blogPosts/${id}`,{title, content})
    }
} 
export const {Context, Provider}=createDataContext(blogPostreducer, {getBlogs, addBlogs, deleteBlog, editBlog}, [])
