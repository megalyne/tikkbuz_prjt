import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Constants from 'expo-constants'
import AuthScreen from './src/screens/auth';
//import { Provider } from  'react-Redux'
//import { createStore, applyMiddleware} from 'redux-thunk'
//import thunk from 'redux-thunk'
//import rootReducer from './Src/Redux/Reducer'
//import AuthScreen from './Src/Screen/auth'

//const store = createStore(rootReducer, applyMiddleware(thunk))

export default function App() {
  return (
        <View style={styles.container}>
          <AuthScreen/>
      </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
