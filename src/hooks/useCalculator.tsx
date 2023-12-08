import {useRef, useState} from 'react';

enum Operators {
  addition,
  subtraction,
  multiplication,
  division,
}
export const useCalculator = () => {
  const lastOperation = useRef<Operators>();

  const [prevNumber, setPrevNumber] = useState('0');
  const [number, setNumber] = useState('0');

  const bntClean = () => {
    setNumber('0');
    setPrevNumber('0');
  };
  const buildNumber = (textNumber: string) => {
    //no se acepta doble punto
    if (number.includes('.') && textNumber === '.') {
      return;
    }

    if (number.startsWith('0') || number.startsWith('-0')) {
      //Punto decimal
      if (textNumber === '.') {
        setNumber(number + textNumber);

        //Evaluar si hay otro cero y otro punto
      } else if (textNumber === '0' && number.includes('.')) {
        setNumber(number + textNumber);
      }

      //Evaluar si es diferente de cero y no tiene un punto
      else if (textNumber !== '0' && !number.includes('.')) {
        setNumber(textNumber);
      }
      //Evitar el 0000.0
      else if (textNumber === '0' && !number.includes('.')) {
        setNumber(number);
      } else {
        setNumber(number + textNumber);
      }
    } else {
      setNumber(number + textNumber);
    }
  };
  const postiveNegative = () => {
    if (number.includes('-')) {
      setNumber(number.replace('-', ''));
    } else {
      setNumber('-' + number);
    }
  };
  const deleteLastNumber = () => {
    let numCharactersOnDisplay = number.length - 1;
    //Si hay más de 1 caracter
    if (number.length > 1) {
      setNumber(number.slice(0, -1));
    } else {
      setNumber('0');
    }
    //Si hay un solo numero y es negativo
    if (numCharactersOnDisplay === 1 && number.includes('-')) {
      number.substring(0);
      setNumber('0');
    }
  };
  const previewOperation = () => {
    if (number.endsWith('.')) {
      setPrevNumber(number.slice(0, -1));
    } else {
      setPrevNumber(number);
    }

    setNumber('0');
  };
  const btnAddition = () => {
    previewOperation();
    lastOperation.current = Operators.addition;
  };
  const btnSubtraction = () => {
    previewOperation();
    lastOperation.current = Operators.subtraction;
  };
  const bntMultiplication = () => {
    previewOperation();
    lastOperation.current = Operators.multiplication;
  };
  const bntDivision = () => {
    previewOperation();
    lastOperation.current = Operators.division;
  };
  const calculateResult = () => {
    const num1 = Number(number);
    const num2 = Number(prevNumber);

    if (num1 && num2) {
      switch (lastOperation.current) {
        case Operators.addition:
          setNumber(`${num1 + num2}`);
          break;

        case Operators.subtraction:
          setNumber(`${num2 - num1}`);
          break;

        case Operators.multiplication:
          setNumber(`${num1 * num2}`);
          break;

        case Operators.division:
          setNumber(`${num2 / num1}`);
          break;
      }
    }

    setPrevNumber('0');
  };

  const actions = {
    bntClean,
    buildNumber,
    postiveNegative,
    deleteLastNumber,
    btnAddition,
    btnSubtraction,
    bntMultiplication,
    bntDivision,
    calculateResult,
  };

  return {
    prevNumber,
    number,
    actions,
  };
};
