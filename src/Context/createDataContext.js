import React, {useReducer} from 'react';

export default (reducer, actionsObj, initialState)=>{

    //to create context automatically we need to pass reducer,   
    //actionsObj: i.e. the obj containing functions which call dispatch internally
    //and initial state, these three parameters are different for every new context whereas all other stuff is 
    //repeated boiler plate code

    const Context=React.createContext()


    const Provider=({children})=>{
        const [state, dispatch]=useReducer(reducer, initialState)

        //if u don't want to pass dispatch u can do this, 
        //make sure to change the definition of addBlogs function to this structure
        // const addBlogs=(dispatch)=>{
        //     return ()=>{
        //         return dispatch({some action Obj})
        //     }
        // }
        // let boundActions={}

        // for(let key in actionsObj){
        //     //NOTE actionsObj.key will be a function that is called with dispatch and returns a function,
        //     //that returned function which calls dispatch now knows what dispatch is
        //     //so dispatch is undefined error is not present
        //     boundActions[key]=actionsObj[key](dispatch); 
        // }

        //Now you don't need to pass dispatch to {children} rather u can just pass boundActions as 
        //these actions already know what dispatch is


        return <Context.Provider value={{state, dispatch, ...actionsObj}}>
            {children}
        </Context.Provider>
    }
    return {Context, Provider};
}