import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: 'black',
    paddingHorizontal: 20,
  },
  calculatorContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  resultText: {
    color: 'white',
    fontSize: 60,
    textAlign: 'right',
    marginBottom: 10,
  },

  list: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 18,
    paddingHorizontal: 10,
  },
  resultTextSmall: {
    color: 'rgba(255,255,255,0.7)',
    fontSize: 30,
    textAlign: 'right',
  },
});
