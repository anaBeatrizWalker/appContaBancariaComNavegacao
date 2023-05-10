import { useNavigation, StackActions  } from '@react-navigation/native';
import { View, Text, TouchableOpacity } from 'react-native';

import { styles } from './styles.js';

import FontAwesome from 'react-native-vector-icons/FontAwesome';

export default function Account({route}) {

  const navigation = useNavigation();

  return (
    <View>
      <View style={styles.viewResultado}>
        <Text style={styles.textoResultado}>Nome: {route.params.nome}</Text>
        <Text style={styles.textoResultado}>Idade: {route.params.idade}</Text>
        <Text style={styles.textoResultado}>Sexo: {route.params.sexo}</Text>
        <Text style={styles.textoResultado}>Escolaridade: {route.params.escolaridade}</Text>
        <Text style={styles.textoResultado}>Limite: {route.params.limite.toFixed(2)} </Text>
        <Text style={styles.textoResultado}>É brasileiro: {route.params.brasileiro ? "Sim" : "Não"}</Text>
      </View>

        <TouchableOpacity style={styles.buttonBack}  onPress={() => navigation.dispatch(StackActions.popToTop())}>
          <Text style={styles.textoButton}>Voltar ao início</Text>
          <FontAwesome name="undo" size={15} color="#ffffff" style={styles.icon}/>
        </TouchableOpacity>
    </View>
  );
}
