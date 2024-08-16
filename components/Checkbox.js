import * as React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { Entypo } from '@expo/vector-icons'

export default function Checkbox({
    id,
    text,
    isCompleted,
    isToday,
    hour
}){
    return(
        <TouchableOpacity>
            {isCompleted && <Entypo name="check"/>}
        </TouchableOpacity>
    )
}