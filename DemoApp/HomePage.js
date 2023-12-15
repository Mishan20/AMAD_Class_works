import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from 'react-native';
import StarButton from './components/StarButton';
import {Button} from 'react-native-paper';

export default function HomePage({navigation}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const register = () => {
    console.log('Register Clicked ' + email, +password);
  };

  return (
    <View>
      <View>
        <TouchableOpacity onPress={register}>
          <Text style={styles.btn}>Register</Text>
        </TouchableOpacity>

        <TextInput
          onChangeText={e => {
            setEmail(e);
          }}
          placeholder="Enter Email"></TextInput>
        <TextInput
          onChangeText={e => {
            setPassword(e);
          }}
          placeholder="Enter Password"></TextInput>

        <Button
          icon="camera"
          mode="contained"
          onPress={()=> {navigation.navigate('Item')}}>
          Press me
        </Button>
      </View>
      {/* <View>
        <StarButton title="Click me" color="red" onPress={()=> console.log(register())} />
        <StarButton title="Login" color="green"  />
      </View> */}
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    backgroundColor: 'blue',
    color: 'white',
    marginBottom: 10,
    width: '30%',
    position: 'relative',
    top: 50,
    left: 10,
  },
  btn: {
    backgroundColor: 'blue',
  },
});
