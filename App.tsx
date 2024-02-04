import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';

export default function App() {
  return (
    <View className='flex-1 justify-center items-center'>
      <Text className='text-3xl text-blue-500'>Open up your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

