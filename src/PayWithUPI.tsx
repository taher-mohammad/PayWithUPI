import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';


const linking = {
  prefixes: [
    'paywithupi://','https://paywithupi/','http://paywithupi/'
    /* your linking prefixes */
  ]
  
};
  
const PayWithUPI = () : JSX.Element => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: Colors.lighter,
  };

  const onClick = () => {
      console.log('on Click of Pay button')
  }

  return (
    <NavigationContainer linking={linking} fallback={<Text>Loading...</Text>}>
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <View
          style={styles.sectionContainer}>
          <Text style={styles.titleText}>
            {'Pay With UPI'}
          </Text>
          <View style={styles.sectionDescription}>
            <TextInput 
              style={styles.baseText}
              placeholder="Enter VPA" />

              <Button
                onPress={onClick}
                title="Pay"
                color="#007AFF"
                accessibilityLabel="Pay with UPI app installed in Mobile"
              />
            </View>
        </View>
      </ScrollView>
    </SafeAreaView>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  baseText: {
    fontFamily: 'Cochin',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign:'center',
    backgroundColor:  Colors.white,
    
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign:'center'
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 100,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default PayWithUPI