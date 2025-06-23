import React, {useState, useReducer} from "react";
import { Text, StyleSheet, View, Button } from "react-native";

const ColorScreen = () => {
const [colorList, setColorList] = useState({});
      const randomColor = () => {
        const randomNumber = Math.floor(Math.random() * 16777215).toString(16);
        return `#${randomNumber}`;
      };
return <View>
       <Button  title="Add a Color" onPress={()=>{ 
          setColorList(prevColors => {
            const newColor = randomColor();
            return {...prevColors, [newColor]: true}; // Using the color as key
          })
        }} />
        {Object.keys(colorList).map((color, index) => (
          <View key={index} style={{ backgroundColor: color, height: 100, marginVertical: 10 }}>
            <Text style={styles.FlatListtext}>{color}</Text>
          </View>
        ))}
    
   </View>;
};

const styles = StyleSheet.create({
  FlatListtext: {
    fontSize: 30, 
    marginVertical: 20,
    marginHorizontal: 20,
  },
});

export default ColorScreen;
