import React from 'react';
import { StyleSheet, ScrollView, Pressable, View, Text } from 'react-native';

function ToDoList({ tasks }) {
    return (
        <ScrollView>
            <ul>
                {tasks.map((task) => (
                <Pressable>
                    <View>
                        <Text>{task}</Text>
                    </View>
                 </Pressable>
                ))}
            </ul>
        </ScrollView>
);
}

const styles = StyleSheet.create({
    task: {
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#ccc',
    },
    completed: {
    backgroundColor: '#e0e0e0',
    },
    taskText: {
    fontSize: 16,
    },
});

export default ToDoList;
