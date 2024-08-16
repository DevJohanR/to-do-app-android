import * as React from 'react';
import { todosData } from '../data/todos';
import { FlatList, Text, View } from 'react-native';

export default function TodoList() {
  return (
    <FlatList
      data={todosData}  // Asegúrate de que esta referencia es correcta
      keyExtractor={item => item.id.toString()}
      renderItem={({ item }) => {
        // Valida que item exista antes de intentar renderizar
        if (!item) return null;

        return (
          <View>
            <Text>{item.text}</Text>
          </View>
        );
      }}
    />
  );
}
