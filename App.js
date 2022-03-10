import React from 'react'
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import IndexScreen from "./src/screens/IndexScreen";
import ShowScreen from './src/screens/ShowScreen';
import CreateScreen from './src/screens/CreateScreen';
import EditScreen from './src/screens/EditScreen';
import {Provider as BlogProvider} from './src/Context/BlogContext'

const navigator=createStackNavigator({
  Index: IndexScreen,
  Show: ShowScreen,
  Create: CreateScreen,
  Edit: EditScreen,
},
  {
    initialRouteName: "Index",
    defaultNavigationOptions:{
      title:"Blog"
    }
  }
)

const ReactApp=createAppContainer(navigator);

export default ()=>{
  return <BlogProvider>
      <ReactApp/>
    </BlogProvider>
}