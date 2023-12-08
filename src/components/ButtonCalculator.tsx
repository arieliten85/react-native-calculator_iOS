import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

interface IButton {
  text: string;
  backgroundColor: string;
  colorText: string;
  action: (textNumber?: any) => void; //Ver ANY
}

export const ButtonCalculator = ({
  text,
  backgroundColor,
  colorText,
  action,
}: IButton) => {
  return (
    <TouchableOpacity onPress={() => action(text)}>
      <View
        style={{
          ...styles.button,
          backgroundColor,
          width: text === '0' ? 150 : 70,
        }}>
        <Text
          style={{
            ...styles.buttonText,
            color: colorText,
            textAlign: text === '0' ? 'left' : 'center',
            paddingLeft: text === '0' ? 25 : 10,
          }}>
          {text}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    height: 70,
    width: 70,
    borderRadius: 100,
    justifyContent: 'center',
    marginHorizontal: 7,
  },
  buttonText: {
    textAlign: 'center',
    padding: 10,
    fontSize: 30,
    fontWeight: '400',
  },
});
