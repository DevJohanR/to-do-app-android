import * as React from 'react';
import { View, Text, StyleSheet, TextInput, Button, TouchableOpacity, Switch } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

export default function AddTodo() {
    const [name, setName] = React.useState('');
    const [date, setDate] = React.useState(new Date());
    const [showPicker, setShowPicker] = React.useState(false);
/* Estado showPicker: Este estado controla si el DateTimePicker está visible o no. Comienza como false para que no se muestre automáticamente. */
const [isToday, setIsToday] = React.useState(false);  // Definir el estado isToday aquí


    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShowPicker(false);
        setDate(currentDate);
    };

    const showDatePicker = () => {
        setShowPicker(true);
    };
    /*Función showDatePicker: Cambia showPicker a true cuando el botón de hora es presionado, haciendo que el DateTimePicker se muestre. */

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Add Task</Text>
            
            <View style={styles.inputContainer}>
                <Text style={styles.inputTitle}>Name</Text>
                <TextInput
                    style={styles.textInput}
                    placeholder="Task"
                    placeholderTextColor="#00000030"
                    onChangeText={(text) => setName(text)}
                />
            </View>
            
            <View style={styles.inputContainer}>
                <Text style={styles.inputTitle}>Hour</Text>
                <TouchableOpacity onPress={showDatePicker} style={styles.dateButton}>
                    <Text>{date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</Text>
                </TouchableOpacity>
            </View>

            {showPicker && (
                <DateTimePicker
                    value={date}
                    mode={'time'}
                    is24Hour={true}
                    display="default"
                    onChange={onChange}
                    style={{ width: '80%' }}
                />
            )}

<View style={styles.inputContainer}>
             
                    <Text style={styles.inputTitle}>Today</Text>
                    <Switch
                    value={isToday}
                    onValueChange={(value) => { setIsToday(value) }}
                />
         
             
            </View>
            <TouchableOpacity style={styles.button}>
                <Text style={{color: 'white'}}>Done</Text>
            </TouchableOpacity>
            <Text style={{color: '#00000040', fontSize: 12, maxWidth: '84%', paddingBottom: 10}}>If you disable today, the task will be considered as tomorrow</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F7F8FA',
        paddingHorizontal: 30,
    },
    title: {
        fontSize: 34,
        fontWeight: 'bold',
        marginBottom: 35,
        marginTop: 10,
        paddingTop: 10,
    },
    inputTitle: {
        fontSize: 20,
        fontWeight: '600',
        lineHeight: 24,
    },
    textInput: {
        borderBottomColor: '#00000030',
        borderBottomWidth: 1,
        width: '80%',
    },
    inputContainer: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingBottom: 30,
    },
    dateButton: {
        backgroundColor: '#DDDDDD',
        padding: 10,
        borderRadius: 5,
    },
    button: {
        marginTop: 30,
        marginBottom: 15,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#000000',
        height: 46,
        borderRadius: 11,
    }
});


/*




Función onChange: Esta función maneja el cambio de la fecha/hora en el picker y lo cierra después de seleccionar un valor.

Botón para la hora: En lugar de mostrar el DateTimePicker inmediatamente, hay un botón que muestra la hora seleccionada y abre el picker cuando se presiona.
*/