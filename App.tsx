import React from 'react';
import {QueryClientProvider, QueryClient} from 'react-query';
import {Main} from './src/screens/mainScreen.tsx';
import {NavigationContainer} from '@react-navigation/native';
import 'react-native-gesture-handler';
import {createStackNavigator} from '@react-navigation/stack';
import {Details} from './src/screens/details.tsx';
import {StackParamList} from './src/types/navigation.ts';

const Stack = createStackNavigator<StackParamList>();

const queryClient = new QueryClient();

export const clearCache = () => queryClient.clear();

const App = (): React.JSX.Element => {
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Main" component={Main} />
          <Stack.Screen name="Details" component={Details} />
        </Stack.Navigator>
      </NavigationContainer>
    </QueryClientProvider>
  );
};

export default App;
