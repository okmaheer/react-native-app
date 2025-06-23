import React from "react";
import { Text, StyleSheet, FlatList } from "react-native";

const ListScreen = () => {
    const friends = [
        { name: "Friend #1", age: 20 },
        { name: "Friend #2", age: 21 },
        { name: "Friend #3", age: 22 },
        { name: "Friend #4", age: 23 },
        { name: "Friend #5", age: 24 },
        { name: "Friend #6", age: 60 },
        { name: "Friend #7", age: 38 },
        { name: "Friend #8", age: 30 },

    ];
  return <FlatList keyExtractor={(friends) => { return friends.name }}  data={friends} renderItem={({item})=>{return <Text style={styles.FlatListtext} >{item.name} - Age {item.age}</Text>}}/>;
};

const styles = StyleSheet.create({
  FlatListtext: {
    fontSize: 30,
    marginVertical: 20,
    marginHorizontal: 20,
  },
});

export default ListScreen;
