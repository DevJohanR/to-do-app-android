import {NavigationContainer} from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from "./screens/Home";
import AddTodo from "./screens/AddTodo"
const Stack = createNativeStackNavigator();



export default function App() {
  return (
 
       <NavigationContainer>
       <Stack.Navigator>
       <Stack.Screen
       name="Home"
       component={Home}
       />
            <Stack.Screen
       name="Add"
       component={AddTodo}
       />
       </Stack.Navigator>
       </NavigationContainer>


  );
}

