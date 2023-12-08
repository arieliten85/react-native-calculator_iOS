import React from 'react';

import {SafeAreaView, StatusBar} from 'react-native';
import {CalculatorScreen} from './src/screens/CalculatorScreen';
import {styles} from './src/themes/app.Theme';

const App = () => {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <StatusBar barStyle={'light-content'} />
      <CalculatorScreen />
    </SafeAreaView>
  );
};

export default App;
