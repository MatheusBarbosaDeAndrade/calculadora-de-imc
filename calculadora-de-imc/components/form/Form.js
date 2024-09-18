import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity} from 'react-native';
import styles from './styles'; // Certifique-se de que o caminho está correto
import Message from '../message/Message.js';
import Title from '../Title/Title.js';

export default function Form() {
  const [weight, setWeight] = useState(null);
  const [height, setHeight] = useState(null);
  const [imc, setImc] = useState(null);
  const [message, setMessage] = useState('Clique em "Calcular" para calcular seu IMC');
  const [textButton, setTextButton] = useState('Calcular');

  const calcImc = () => {
    if (weight && height) {
      return setImc((weight / (height * height)).toFixed(2));
    }
  };

  const btn = () => {
    if (weight && height) {
      calcImc();
      setWeight('');
      setHeight('');
      setMessage(`Seu IMC é: `);
      setTextButton('Calcular novamente');
    } else {
      setImc(null);
      setTextButton('Calcular');
      setMessage('Clique em "Calcular" para calcular seu IMC');
    }
  };

  return (
    <View style={styles.form}>
     
        <Title />
     

      <View>
        <Text style={styles.label}>Digite sua altura</Text>
        <TextInput 
          placeholder='ex: 1.75' 
          keyboardType='numeric'
          onChangeText={setHeight}
          value={height}
          style={styles.input}
        />

        <Text style={styles.label}>Digite seu peso</Text>
        <TextInput 
          placeholder='ex: 70.900' 
          keyboardType='numeric'
          onChangeText={setWeight}
          value={weight}
          style={styles.input}
        />

        <TouchableOpacity
          style={styles.button}
          onPress={()=> btn()}
        >
          <Text style={styles.textButton}>{textButton}</Text>
        </TouchableOpacity>
        
       
       
        
      </View>
       <Message message={message} imc={imc} />
    </View>
  );
}
