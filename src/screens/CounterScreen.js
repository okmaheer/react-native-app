import React, {useState} from "react";
import { Text, StyleSheet, View, Button } from "react-native";

const CounterScreen = () => {
const [counter, setCounter] = useState(0);

return <View>
        <Button  title="Increase" onPress={()=>{ setCounter(counter+1); 
console.log("Counter: ", counter);
        }} />
       <Button  title="Descrase" onPress={()=>{  setCounter(counter-1)
console.log("Counter: ", counter);
        }} />
    
    <Text>Current Counter {counter}</Text></View>;
};

const styles = StyleSheet.create({
  FlatListtext: {
    fontSize: 30, 
    marginVertical: 20,
    marginHorizontal: 20,
  },
});

export default CounterScreen;
