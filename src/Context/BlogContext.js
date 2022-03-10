import createDataContext from "./createDataContext"

const blogPostreducer=(state, action)=>{
    switch(action.type){
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

const addBlogs=(dispatch)=>{
    return (title, content, callback)=>{
        dispatch({type: 'blogPost/add', payload:{title, content}})
        callback()
    }
}

const deleteBlog=(dispatch)=>{
    return (id)=>dispatch({type: 'blogPost/delete', payload: id});
    // return (a,b)=> a+b;
}

const editBlog=(dispatch)=>{
    return (title, content, id, callback)=>{
        dispatch({
            type: 'blogPost/edit',
            payload: {title, content, id}
        })
        callback()
    }
} 
export const {Context, Provider}=createDataContext(blogPostreducer, {addBlogs, deleteBlog, editBlog}, [])
