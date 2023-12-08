import React from 'react';
import {Text, View} from 'react-native';
import {styles} from '../themes/app.Theme';
import {ButtonCalculator} from '../components/ButtonCalculator';
import {useCalculator} from '../hooks/useCalculator';
import {buttonRows} from '../config/buttonConfig';

export const CalculatorScreen = () => {
  const {prevNumber, number, actions} = useCalculator();

  return (
    <View style={styles.calculatorContainer}>
      {prevNumber !== '0' && (
        <Text style={styles.resultTextSmall}>{prevNumber}</Text>
      )}
      <Text style={styles.resultText} numberOfLines={1} adjustsFontSizeToFit>
        {number}
      </Text>

      {buttonRows.map((row, rowIndex) => (
        <View key={rowIndex} style={styles.list}>
          {row.map(button => (
            <ButtonCalculator
              key={button.text}
              text={button.text}
              backgroundColor={button.backgroundColor}
              colorText={button.colorText}
              action={actions[button.action as keyof typeof actions]}
            />
          ))}
        </View>
      ))}
    </View>
  );
};
