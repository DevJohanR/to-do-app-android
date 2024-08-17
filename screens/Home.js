import * as React from 'react';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet, Text, Image } from 'react-native';
import TodoList from '../components/TodoList';
import { todosData } from '../data/todos';

export default function Home() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
     <Image source={{uri: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/cute-photos-of-cats-cleaning-1593202999.jpg'}} style={styles.pic} />
        <Text style={styles.title}>Today</Text>
        <TodoList todosData={todosData.filter(todo => todo.isToday === true)} />
        <Text style={styles.title}>Tomorrow</Text>
        <TodoList todosData={todosData.filter(todo => !todo.isToday === true)} />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },



  pic:{
    width: 42,
    height: 42,
    borderRadius: 21,
    alignSelf: 'flex-end',
    marginTop: 10,
    marginRight: 10
  },
  title: {
    fontSize: 34,
    fontWeight: 'bold',
    marginBottom: 35,
    marginTop: 10,
    padding: 10
},

});
