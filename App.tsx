import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { Button } from './src/components/ui/Button';
import "./src/styles/global.css";

export default function App() {
  return (
    <View className='flex-1 justify-center items-center'>
      <Text className='text-3xl text-blue-500'>Open up your app!</Text>
      <Button label='Add Color' variant="destructive"></Button>
      <StatusBar style="light" />
    </View>
  );
}

