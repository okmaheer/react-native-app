import react from "react";
import { Text, StyleSheet, View, Button } from "react-native";
const ComponentsScreen = () => {
 let greeting = "Hello Maheer!";
  return (
    <View>
      <Text style={styles.textStyle}>Getting Started with react native jsx</Text>
      <Text style={styles.greetingStyle} >{greeting}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  textStyle: {
    fontSize: 45,
    color: "blue",
    margin: 20,
  },
  greetingStyle: {
    fontSize: 25,
    color: "bkack",
    margin: 20,
  },
});

export default ComponentsScreen;
