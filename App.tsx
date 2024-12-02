import {useState} from 'react';
import {View, Text, Button} from 'react-native';

const App = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(prev => prev + 1);
  const decrement = () => setCount(prev => prev - 1);

  return (
    <View>
      <Text>{`Count: ${count}`}</Text>
      <Button title="Increment" onPress={increment} />
      <Button title="Decrement" onPress={decrement} />
    </View>
  );
};

export default App;

// import React from 'react';
// import {Text, View, Button} from 'react-native';
// import {NavigationContainer} from '@react-navigation/native';
// import {createStackNavigator} from '@react-navigation/stack';

// const Stack = createStackNavigator();

// const HomeScreen = ({navigation}: {navigation: any}) => {
//   return (
//     <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
//       <Text>Home Screen</Text>
//       <Button title="Next" onPress={() => navigation.navigate('NextScreen')} />
//     </View>
//   );
// };

// const NextScreen = () => {
//   return (
//     <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
//       <Text>Next Screen</Text>
//     </View>
//   );
// };

// const App = () => {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen name="Home" component={HomeScreen} />
//         <Stack.Screen name="NextScreen" component={NextScreen} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };

// export default App;
