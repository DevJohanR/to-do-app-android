import * as React from 'react';

import { FlatList } from 'react-native';
import Todo from './Todo';

export default function TodoList({todosData}) {
  return (
    <FlatList
      data={todosData}  // Asegúrate de que esta referencia es correcta
      keyExtractor={item => item.id.toString()}
      renderItem={({ item }) => {
  
        return (
          
            <Todo {...item} />
          
        );
      }}
    />
  ); 
}

/*
//Esto es lo mismo pero con una sintaxis mas corta

En JavaScript, cuando una función de flecha tiene una sola expresión y no está envuelta en llaves {}, la función implícitamente retorna el valor de esa expresión.


export default function TodoList() {
  return (
    <FlatList
      data={todosData}
      keyExtractor={item => item.id.toString()}
      renderItem={({ item }) => <Todo {...item} />}
    />
  );
}

*/