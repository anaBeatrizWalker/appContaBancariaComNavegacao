import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Text, View, TextInput, Switch, Button, TouchableOpacity } from 'react-native';

import { styles } from './styles.js';

import { Picker } from '@react-native-picker/picker';
import Slider from '@react-native-community/slider';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export default function Form() {
  const navigation = useNavigation();

  const [nome, setNome] = useState('');
  const [idade, setIdade] = useState(0);
  const [sexo, setSexo] = useState('');
  const [escolaridade, setEscolaridade] = useState('');
  const [limite, setLimite] = useState(0);
  const [brasileiro, setBrasileiro] = useState('');

  function enviar() {
    setNome(nome);
    setIdade(idade);
    setSexo(sexo);
    setEscolaridade(escolaridade);
    setLimite(limite);
    setBrasileiro(brasileiro);
    validarDados();
  }

  function validarDados() {
    if (nome === '' || null) {
      alert('Campo Nome obrigatório!');
    } else if (idade === 0) {
      alert('Campo Idade obrigatório!');
    } else if (sexo === null) {
      alert('Campo Sexo obrigatório!');
    } else if (escolaridade === null) {
      alert('Campo Escolaridade obrigatório!');
    } else if (limite === 0) {
      alert('Campo Limite obrigatório!');
    } else if (brasileiro === null) {
      alert('Campo Brasileiro obrigatório!');
    } else {
      navigation.navigate('account', {
        nome,
        idade,
        sexo,
        escolaridade,
        limite,
        brasileiro,
      });
    }
    limparDados();
  }

  function limparDados() {
    setNome('');
    setIdade(0);
    setSexo('');
    setEscolaridade('');
    setLimite(0);
    setBrasileiro('');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Nome:</Text>
      <TextInput
        style={styles.inputs}
        placeholder="Digite seu nome"
        onChangeText={(value) => setNome(value)}
        value={nome}></TextInput>

      <Text style={styles.label}>Idade:</Text>
      <TextInput
        style={styles.inputs}
        placeholder="Digite sua idade: "
        onChangeText={(value) => setIdade(value)}></TextInput>

      <Text style={styles.label}>Sexo:</Text>
      <Picker
        selectedValue={sexo}
        style={styles.inputs}
        onValueChange={(value, index) => setSexo(value)}>
        <Picker.Item key={1} value={''} label="Selecione: " />
        <Picker.Item key={2} value={'Feminino'} label="Feminino" />
        <Picker.Item key={3} value={'Masculino'} label="Masculino" />
        <Picker.Item key={4} value={'Outro'} label="Outro" />
      </Picker>

      <Text style={styles.label}>Escolaridade:</Text>
      <Picker
        style={styles.inputs}
        onValueChange={(value, index) => setEscolaridade(value)}>
        <Picker.Item key={1} value={''} label="Selecione: " />
        <Picker.Item key={2} value={'Ensino Médio'} label="Ensino Médio" />
        <Picker.Item key={3} value={'Graduação'} label="Graduação" />
        <Picker.Item key={4} value={'Pós-Graduação'} label="Pós-Graduação" />
        <Picker.Item key={5} value={'Doutorado'} label="Doutorado" />
        <Picker.Item key={6} value={'Mestrado'} label="Mestrado" />
      </Picker>

      <Text style={styles.label}>Limite:</Text>
      <Slider
        style={styles.inputs}
        minimumValue={0}
        maximumValue={10}
        onValueChange={(value) => setLimite(value)}
        value={limite.toFixed(2)}
      />
      <Text style={styles.legend}>{limite.toFixed(2)}</Text>

      <Text style={styles.label}>Brasileiro:</Text>
      <Switch
        style={styles.switchs}
        value={brasileiro}
        onValueChange={(value) => setBrasileiro(value)}
      />
      <Text>{brasileiro ? 'Sim' : 'Não'}</Text>
      
      <TouchableOpacity style={styles.buttonSave}  onPress={enviar}>
        <Text style={styles.textoButton}>Salvar</Text>
        <FontAwesome name="send" size={15} color="#ffffff" style={styles.icon}/>
      </TouchableOpacity>
  
      <TouchableOpacity style={styles.buttonCancel}  onPress={() => navigation.navigate('home')}>
        <Text style={styles.textoButton}>Cancelar</Text>
        <FontAwesome name="undo" size={15} color="#ffffff" style={styles.icon}/>
      </TouchableOpacity>
    </View>
  );
}
