import * as React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Checkbox from './Checkbox';
import moment from 'moment';
import { MaterialIcons } from "@expo/vector-icons";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch, useSelector } from 'react-redux';
import { deleteTodoReducer } from '../redux/todosSlice';

export default function Todo({
    id,
    text,
    isCompleted,
    isToday,
    hour
}) {

    /**
     * Código original:
     * 
     * const [localHour, setLocalHour] = React.useState(new Date(hour));
     * const [thisTodoIsToday, setThisTodoIsToday] = hour ? React.useState(moment(hour).isSame(moment(), 'day')) : React.useState(false);
     * 
     * El código original creaba un objeto `Date` directamente de `hour`, pero esto podría dar lugar a advertencias de formato no válido si `hour` no estaba en un formato estándar. 
     * La lógica para `thisTodoIsToday` también era más compleja de lo necesario.
     */

    // Aseguramos que 'hour' esté en un formato que moment.js pueda interpretar.
    const [localHour, setLocalHour] = React.useState(
        moment(hour, moment.ISO_8601, true).isValid() ? moment(hour) : moment(new Date(hour))
    );

    // Obtiene todos los todos desde el store de Redux.
    const todos = useSelector(state => state.todos.todos);
    const dispatch = useDispatch();

    // Estado para verificar si el todo es para hoy, inicializado de manera más clara.
    const [thisTodoIsToday, setThisTodoIsToday] = React.useState(
        moment(localHour).isSame(moment(), 'day')
    );

    const handleDeleteTodo = async () => {
        dispatch(deleteTodoReducer(id));
        try {
            await AsyncStorage.setItem('Todos', JSON.stringify(
                todos.filter(todo => todo.id !== id)
            ));
            console.log('Todo deleted correctly');
        } catch (e) {
            console.log(e);
        }
    };

    return (
        <View style={styles.container}>
            <Checkbox
                id={id}
                text={text}
                isCompleted={isCompleted}
                isToday={isToday}
                hour={hour}
            />
            <View>
                <Text style={isCompleted ? [styles.text, { textDecorationLine: 'line-through', color: '#73737330' }] : styles.text}>
                    {text}
                </Text>
                <Text style={isCompleted ? [styles.time, { textDecorationLine: 'line-through', color: '#73737330' }] : styles.time}>
                    {moment(localHour).format('LT')}
                </Text>
            </View>
            <TouchableOpacity onPress={handleDeleteTodo} >
                <MaterialIcons name="delete-outline" size={24} color="#73737340" style={styles.delete} />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 20,
        flexDirection: 'row',
        alignItems: 'center'
    },
    text: {
        fontSize: 15,
        fontWeight: '500',
        color: '#737373'
    },
    time: {
        fontSize: 13,
        color: '#a3a3a3',
        fontWeight: '500'
    }
});
