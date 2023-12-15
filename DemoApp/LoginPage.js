import React, {useState} from 'react';
import {View, Text, TextInput, Button, Switch} from 'react-native';

const RegisterForm = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [username, setUsername] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  return (
    <View>
      <Text
        style={{
          textAlign: 'center',
          color: 'blue',
          textTransform: 'capitalize',
          padding: 20,
          fontWeight: 'bold',
          fontSize:30
        }}>
        Register Form
      </Text>

      <TextInput
        placeholder="Enter your email"
        value={email}
        onChangeText={text => setEmail(text)}
        style={{ borderWidth: 1, margin: 15, borderRadius:20}}
      />

      <TextInput
        placeholder="Enter your username"
        value={username}
        onChangeText={text => setUsername(text)}
        style={{borderWidth: 1, margin: 15, borderRadius:20}}
      />

      <TextInput
        placeholder="Enter your password"
        secureTextEntry={true}
        value={password}
        onChangeText={text => setPassword(text)}
        style={{border: 10, borderWidth: 1, margin: 15, borderRadius:20}}
      />

      <TextInput
        placeholder="Confirm your password"
        secureTextEntry={true}
        value={confirmPassword}
        onChangeText={text => setConfirmPassword(text)}
        style={{border: 10, borderWidth: 1, margin: 15, borderRadius:20}}
      />

      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Text>Remember Me:</Text>
        <Switch
          value={rememberMe}
          onValueChange={value => setRememberMe(value)}
        />
      </View>

      <Button title="Register" onPress={()=> {navigation.navigate('Home')}} />
    </View>
  );
};

export default RegisterForm;
