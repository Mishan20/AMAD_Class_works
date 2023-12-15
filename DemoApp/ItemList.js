import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

export default function ItemList({navigation}) {
  return (
    <View>
      <Text style={styles.text}>Add Medicine</Text>

      <TextInput placeholder="Medicine ID" style={styles.name} />

      <TextInput placeholder="Medicine Name" style={styles.age} />

      <TextInput placeholder="Quantity" style={styles.address} />
      <TextInput placeholder="Price" style={styles.details} />

      <TextInput placeholder="Suplier ID" style={styles.id} />

      <TouchableOpacity style={styles.cancel}>
        <Text style={styles.textc}>Cancel</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.add}>
        <Text
          style={styles.texta}
          onPress={() => {
            navigation.navigate('Load');
          }}>
          Add
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
    position: 'relative',
    top: 30,
  },

  name: {
    position: 'relative',
    top: 50,
    left: 60,
    borderWidth: 1,
    // margin: 5,
    width: 300,
    borderRadius: 10,
    paddingLeft: 30,
    marginBottom: 40,
  },

  age: {
    position: 'relative',
    top: 50,
    left: 60,
    borderWidth: 1,
    // margin: 5,
    marginBottom: 40,
    width: 300,
    borderRadius: 10,
    paddingLeft: 30,
  },

  address: {
    position: 'relative',
    top: 50,
    left: 60,
    borderWidth: 1,
    // margin: 5,
    marginBottom: 40,
    width: 300,
    borderRadius: 10,
    paddingLeft: 30,
  },

  details: {
    position: 'relative',
    top: 50,
    left: 60,
    borderWidth: 1,
    // margin: 5,
    marginBottom: 40,
    width: 300,
    borderRadius: 10,
    paddingLeft: 30,
  },

  id: {
    position: 'relative',
    top: 50,
    left: 60,
    borderWidth: 1,
    // margin: 5,
    marginBottom: 40,
    width: 300,
    borderRadius: 10,
    paddingLeft: 30,
  },

  cancel: {
    backgroundColor: 'blue',
    color: 'white',
    marginBottom: 10,
    marginLeft: 40,
    paddingLeft: 20,
    paddingTop: 4,
    width: '30%',
    height: '8%',
    position: 'relative',
    top: 60,
    left: 10,
    borderRadius: 20,
  },

  add: {
    backgroundColor: 'blue',
    color: 'white',
    marginBottom: 10,
    marginLeft: 40,
    paddingLeft: 20,
    paddingTop: 4,
    width: '30%',
    height: '8%',
    position: 'relative',
    left: 200,
    borderRadius: 20,
  },

  textc: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
    marginTop: 5,
    marginLeft: 8,
  },

  texta: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
    marginTop: 5,
    marginLeft: 23,
  },
});
