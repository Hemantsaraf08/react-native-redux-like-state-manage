# react-native-redux-like-state-manage

### In this app we do CRUD operations on blogs, 

### We manage blogData by wrapping our App in blogContextProvider 

### Here we learn to make a contextCreator function that is useful if we have multiple context in our app, this fn. helps us avoid boiler plate duplication by providing a generic way create Context
(refer src/context/createDataContext and its use in BlogContext.js)
### Also we learn how to put icons in header of screen (Refer: src/screens/IndexScreen.js and src/screens/ShowScreen.js ==> navigationOptions)

### And how to navigate after form submit (using Callback navigation fn. refer src/screens/EditScreen.js ==> navigation.pop() and navigation.navigate('string')
