import {View, Text, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import {Button, TextInput} from 'react-native-paper';
import Textarea from 'react-native-textarea';

export default function AddPost() {
  const [title, setTitle] = useState('');
  const [userId, setUserId] = useState('');
  const [body, setBody] = useState('');

  const savePost = () => {
    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify({
        title: title,
        body: body,
        userId: userId,
      }),
      headers: {
        'Content-type': 'application/json; charser=UTF-8',
      },
    })
      .then(response => response.json())
      .then(json => {
        console.log(json);
        clear();
      });
  };

  const clear = () => {
    setTitle('');
    setBody('');
    setUserId('');
  };

  return (
    <View>
      <View>
        <Text style={styles.title}>AddPost</Text>
      </View>

      <View style={styles.content}>
        <TextInput
          label="Enter Title"
          style={styles.textInput1}
          onChangeText={e => {
            setTitle(e);
          }}
          value={title}
        />

        <TextInput
          label="Enter User ID"
          style={styles.textInput2}
          onChangeText={e => {
            setUserId(e);
          }}
          value={userId}
        />
      </View>
      <View style={styles.text}>
        <Textarea
          containerStyle={styles.textareaContainer}
          style={styles.textarea}
          onChangeText={e => {
            setBody(e);
          }}
          defaultValue={body}
          maxLength={120}
          placeholder={'Enter Your post body。。。'}
          placeholderTextColor={'#1e272e'}
          underlineColorAndroid={'transparent'}
        />

        <Button
          style={styles.btn}
          buttonColor="#27ae60"
          icon=""
          mode="contained"
          onPress={() => savePost()}>
          Upload Post
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    color: 'blue',
    fontSize: 30,
    top: 20,
    fontWeight: 'bold',
    alignItems: 'center',
    textAlign: 'center',
  },

  title_container: {
    flex: 1,
    alignItems: 'center',
  },
  content: {},
  textInput1: {
    position: 'relative',
    top: 40,
  },
  textInput2: {
    position: 'relative',
    top: 60,
  },
  textareaContainer: {
    height: 180,
    padding: 5,
    backgroundColor: '#D6A2E8',
  },
  text: {
    position: 'relative',
    top: 90,
  },
  textarea: {
    textAlignVertical: 'top',
    height: 170,
    fontSize: 14,
    color: '',
  },
  btn: {
    marginTop: 50,
  },
});
