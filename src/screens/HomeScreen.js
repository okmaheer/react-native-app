import React from "react";
import { Text, StyleSheet, Button,View, TouchableOpacity } from "react-native";

const HomeScreen = ({navigation}) => {
  return <View>
    <Text style={styles.text}  >Hi There! this is home component</Text>
    <Button style={styles.buttonStyling} title="Go to components demo" onPress={()=>{navigation.navigate('Components')}} />
    <Button style={styles.buttonStyling} title="Go to List demo" onPress={()=>{navigation.navigate('List')}} />
    <Button style={styles.buttonStyling} title="Go to Image Screen" onPress={()=>{navigation.navigate('Image')}} />
    <Button style={styles.buttonStyling} title="Go to Counter Screen" onPress={()=>{navigation.navigate('Counter')}} />
    <Button style={styles.buttonStyling} title="Go to Color Screen" onPress={()=>{navigation.navigate('Color')}} />
    <Button style={styles.buttonStyling} title="Go to Square Screen" onPress={()=>{navigation.navigate('Square')}} />


    </View>;
};

const styles = StyleSheet.create({
  text: {
    fontSize: 35,
  },
  buttonStyling:{
    fontSize: 35,
    backgroundColor: "blue",
    color: "white",
    margin: 20,
    padding: 10,
    borderRadius: 5,
  }
});

export default HomeScreen;
