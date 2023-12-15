import {View, Text} from 'react-native';
import LoginPage from './LoginPage';
import HomePage from './HomePage';
import ItemList from './ItemList';
import AddPost from './AddPost';
import LoadAll from './LoadAll';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginPage} />
        <Stack.Screen name="Home" component={HomePage} />
        <Stack.Screen name="Item" component={ItemList} />
        <Stack.Screen name="Load" component={LoadAll} />
        <Stack.Screen name="Add" component={AddPost} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
