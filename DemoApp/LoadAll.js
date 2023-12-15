import {View, FlatList, StyleSheet} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Card, Text} from 'react-native-paper';
import {Bubbles} from 'react-native-loader';

export default function LoadAll() {
  const [data, setdata] = useState([]);
  const [isLoad , setIsLoad] = useState(true);

  const loadData = () => {
    fetch('http://10.11.19.110:3000/')
      .then(response => response.json())
      .then(json => setdata(json), setIsLoad(data));
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <View style={styles.container}>
      {isLoad ? <Bubbles size={10} color="#27ae60" /> :
      
      <FlatList
        data={data}
        renderItem={({item}) => {
          return (
            <Card style={styles.card}>
              <Card.Content>
                <Text variant="titleLarge">{item.name}</Text>
                <Text variant="bodyMedium">{item.price}</Text>
              </Card.Content>
            </Card>
          );
        }}
        keyExtractor={item => item.mid}
      />
}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    marginBottom: 20,
    width: '95%',
  },
  container: {
    flex: 1,
    alignItems: 'center',
  },
});
