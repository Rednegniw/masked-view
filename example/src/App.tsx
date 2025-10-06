import { enableScreens } from 'react-native-screens';
// run this before any screen render(usually in App.js)
enableScreens();

import {
  StyleSheet,
  Text,
  ScrollView,
  TouchableOpacity,
  Platform,
} from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import MaskedViewExample from './components/MaskedViewExample';
import MaskedViewImageExample from './components/MaskedViewImageExample';
import MaskedViewTextExample from './components/MaskedViewTextExample';

const examples = [
  {
    component: MaskedViewExample,
    name: 'MaskedView Example',
  },
  {
    component: MaskedViewImageExample,
    name: 'MaskedView Image Example',
  },
  {
    component: MaskedViewTextExample,
    name: 'MaskedView Text Example',
  },
];

function App() {
  const navigation = useNavigation();
  return (
    <ScrollView>
      {examples
        .filter((example) =>
          'platform' in example ? example?.platform === Platform.OS : example
        )
        .map((example) => (
          <TouchableOpacity
            key={example.name}
            testID={example.name}
            style={styles.exampleTouchable}
            onPress={() => {
              //@ts-ignore
              navigation.navigate(example.name);
            }}
          >
            <Text style={styles.exampleText}>{example.name}</Text>
          </TouchableOpacity>
        ))}
    </ScrollView>
  );
}

const NativeStack = createNativeStackNavigator();

export default function Navigation() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <NativeStack.Navigator initialRouteName="Masked View Example">
          <NativeStack.Screen name="Masked View Example" component={App} />
          {examples
            .filter((example) =>
              'platform' in example
                ? example?.platform === Platform.OS
                : example
            )
            .map((example, index) => (
              <NativeStack.Screen
                key={index}
                name={example.name}
                component={example.component}
              />
            ))}
        </NativeStack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  exampleTouchable: {
    padding: 16,
  },
  exampleText: {
    fontSize: 16,
  },
});
